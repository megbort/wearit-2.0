import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface StoreState {
  // Cart/Shopping state
  count: number;
  increaseCount: () => void;
  resetCount: () => void;

  // Authentication state
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  // Authentication actions
  setUser: (user: User) => void;
  setToken: (token: string) => void;
  login: (user: User, token: string) => void;
  logout: () => void;
  setLoading: (loading: boolean) => void;
}

const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      // Cart/Shopping state
      count: 0,
      increaseCount: () => set((state) => ({ count: state.count + 1 })),
      resetCount: () => set({ count: 0 }),

      // Authentication state
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,

      // Authentication actions
      setUser: (user) => set({ user, isAuthenticated: true }),
      setToken: (token) => {
        set({ token });
        if (globalThis.window) {
          localStorage.setItem('auth-token', token);
        }
      },
      login: (user, token) => {
        set({
          user,
          token,
          isAuthenticated: true,
        });
        if (globalThis.window) {
          localStorage.setItem('auth-token', token);
        }
      },
      logout: () => {
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        });
        if (globalThis.window) {
          localStorage.removeItem('auth-token');
        }
      },
      setLoading: (loading) => set({ isLoading: loading }),
    }),
    {
      name: 'app-storage',
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);

export default useStore;
