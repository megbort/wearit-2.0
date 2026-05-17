import { LOGIN_MUTATION, REGISTER_MUTATION, GET_ME_QUERY } from '../services/graphql/queries/auth';
import type {
  LoginResponse,
  RegisterResponse,
  MeResponse,
} from '../services/graphql/models/auth';
import useStore from '../services/store/useStore';
import client from '../services/apollo/client';

export const useLogin = () => {
  const { login: loginStore, setLoading, isLoading } = useStore();

  const loginUser = async (email: string, password: string) => {
    try {
      setLoading(true);
      const result = await client.mutate<LoginResponse>({
        mutation: LOGIN_MUTATION,
        variables: { email, password },
      });

      if (result.data?.login) {
        loginStore(result.data.login.user, result.data.login.token);
      }
      setLoading(false);
      return result.data;
    } catch (err) {
      console.error('Login failed:', err);
      setLoading(false);
      throw err;
    }
  };

  return {
    login: loginUser,
    loading: isLoading,
  };
};

export const useRegister = () => {
  const { login: loginStore, setLoading, isLoading } = useStore();

  const registerUser = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => {
    try {
      setLoading(true);
      const result = await client.mutate<RegisterResponse>({
        mutation: REGISTER_MUTATION,
        variables: { firstName, lastName, email, password },
      });

      if (result.data?.register) {
        loginStore(result.data.register.user, result.data.register.token);
      }
      setLoading(false);
      return result.data;
    } catch (err) {
      console.error('Registration failed:', err);
      setLoading(false);
      throw err;
    }
  };

  return {
    register: registerUser,
    loading: isLoading,
  };
};

// Get current user
export const useMe = () => {
  const { user, token, setUser, logout } = useStore();

  const getCurrentUser = async () => {
    if (!token) return null;

    try {
      const result = await client.query<MeResponse>({
        query: GET_ME_QUERY,
        fetchPolicy: 'network-only', // Always fetch fresh data
      });

      if (result.data?.me) {
        setUser(result.data.me);
        return result.data.me;
      }
    } catch (error) {
      console.error('Failed to get user:', error);
      logout();
    }
    return null;
  };

  return {
    user,
    getCurrentUser,
  };
};

export const useLogout = () => {
  const { logout } = useStore();

  const logoutUser = () => {
    logout();
    client.clearStore();
  };

  return {
    logout: logoutUser,
  };
};
