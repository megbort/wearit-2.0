import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  HttpLink,
  CombinedGraphQLErrors,
} from '@apollo/client';
import { SetContextLink } from '@apollo/client/link/context';
import { ErrorLink } from '@apollo/client/link/error';
import { from, mergeMap } from 'rxjs';
import { print } from 'graphql';
import { REFRESH_TOKEN_MUTATION } from '@/services/graphql/queries/auth';
import useStore from '@/services/store/useStore';
import type { RefreshTokenResponse } from '@/services/graphql/models/auth';

const GRAPHQL_URL = process.env.NEXT_PUBLIC_GRAPHQL_URL as string;

// Operations that must not trigger a token refresh on UNAUTHENTICATED
const AUTH_OPERATIONS = new Set([
  'Login',
  'Register',
  'RefreshToken',
  'Logout',
]);

// Access token lives in memory only; the httpOnly refresh cookie restores it
let accessToken: string | null = null;

export const setAccessToken = (token: string | null) => {
  accessToken = token;
};

export const getAccessToken = () => accessToken;

type RefreshSession = RefreshTokenResponse['refreshToken'];

let refreshRequest: Promise<RefreshSession | null> | null = null;

// Uses plain fetch so the refresh call bypasses the link chain (no retry recursion).
// Concurrent callers share the in-flight request.
export const refreshSession = (): Promise<RefreshSession | null> => {
  refreshRequest ??= (async () => {
    try {
      const response = await fetch(`${GRAPHQL_URL}?op=RefreshToken`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: print(REFRESH_TOKEN_MUTATION) }),
      });
      const { data } = (await response.json()) as {
        data?: RefreshTokenResponse;
      };
      const session = data?.refreshToken ?? null;
      setAccessToken(session?.token ?? null);
      return session;
    } catch {
      setAccessToken(null);
      return null;
    } finally {
      refreshRequest = null;
    }
  })();
  return refreshRequest;
};

const httpLink = new HttpLink({
  // Append the operation name as a query string so each request is distinguishable
  // in the browser Network tab (e.g. graphql?op=Login). The server ignores it.
  uri: (operation) =>
    operation.operationName
      ? `${GRAPHQL_URL}?op=${operation.operationName}`
      : GRAPHQL_URL,
  credentials: 'include',
});

const authLink = new SetContextLink((prevContext) => ({
  headers: {
    ...prevContext.headers,
    authorization: accessToken ? `Bearer ${accessToken}` : '',
  },
}));

export const errorLink = new ErrorLink(({ error, operation, forward }) => {
  if (!CombinedGraphQLErrors.is(error)) return;
  if (operation.operationName && AUTH_OPERATIONS.has(operation.operationName))
    return;

  const unauthenticated = error.errors.some(
    (graphQLError) => graphQLError.extensions?.code === 'UNAUTHENTICATED',
  );
  if (!unauthenticated) return;

  // Only refresh + retry once per operation. If the retried request still comes
  // back UNAUTHENTICATED, stop here instead of looping refresh→retry forever.
  if (operation.getContext().retried) {
    useStore.getState().logout();
    return;
  }
  operation.setContext({ retried: true });

  return from(refreshSession()).pipe(
    mergeMap((session) => {
      if (!session) {
        useStore.getState().logout();
      }
      // Retry once; the auth link re-reads the refreshed token
      return forward(operation);
    }),
  );
});

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      errorPolicy: 'ignore',
    },
    query: {
      errorPolicy: 'all',
    },
  },
});

export default client;
