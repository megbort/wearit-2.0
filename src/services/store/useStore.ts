import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product } from '@/services/models/product';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface Notification {
  message: string;
  severity: 'success' | 'error' | 'info' | 'warning';
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

  // Notification state
  notification: Notification | null;
  setNotification: (notification: Notification) => void;
  clearNotification: () => void;

  // Product catalogue (in-memory cache, not persisted)
  products: Product[];
  setProducts: (products: Product[]) => void;
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

      // Notification actions
      notification: null,
      setNotification: (notification) => set({ notification }),
      clearNotification: () => set({ notification: null }),

      // Product catalogue
      products: [],
      setProducts: (products) => set({ products }),
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
