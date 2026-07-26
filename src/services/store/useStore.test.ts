import { beforeEach, describe, expect, it } from 'vitest';
import useStore from './useStore';

const initialState = useStore.getState();

beforeEach(() => {
  useStore.setState(initialState, true);
});

describe('cart state', () => {
  it('increaseCount increments count', () => {
    useStore.getState().increaseCount();
    useStore.getState().increaseCount();
    expect(useStore.getState().count).toBe(2);
  });

  it('resetCount resets count to 0', () => {
    useStore.getState().increaseCount();
    useStore.getState().resetCount();
    expect(useStore.getState().count).toBe(0);
  });
});

describe('auth state', () => {
  const user = { id: '1', firstName: 'Ada', lastName: 'Lovelace', email: 'ada@example.com' };

  it('login sets user and isAuthenticated', () => {
    useStore.getState().login(user);
    expect(useStore.getState().user).toEqual(user);
    expect(useStore.getState().isAuthenticated).toBe(true);
  });

  it('setUser sets user and isAuthenticated', () => {
    useStore.getState().setUser(user);
    expect(useStore.getState().user).toEqual(user);
    expect(useStore.getState().isAuthenticated).toBe(true);
  });

  it('logout clears user and isAuthenticated', () => {
    useStore.getState().login(user);
    useStore.getState().logout();
    expect(useStore.getState().user).toBeNull();
    expect(useStore.getState().isAuthenticated).toBe(false);
  });
});

describe('persist partialize', () => {
  it('only persists user and isAuthenticated, not transient state', () => {
    const persistOptions = (useStore as unknown as {
      persist: { getOptions: () => { partialize: (state: ReturnType<typeof useStore.getState>) => object } };
    }).persist.getOptions();

    useStore.getState().login({ id: '1', firstName: 'Ada', lastName: 'Lovelace', email: 'ada@example.com' });
    useStore.getState().setProducts([{ id: 'p1' } as never]);
    useStore.getState().setNotification({ message: 'hi', severity: 'info' });
    useStore.getState().setLoading(true);

    const persisted = persistOptions.partialize(useStore.getState());

    expect(persisted).toEqual({
      user: useStore.getState().user,
      isAuthenticated: true,
    });
  });
});
