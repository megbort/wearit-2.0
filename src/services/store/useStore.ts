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

  // Authentication state (access token lives in memory in the Apollo client)
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  // Authentication actions
  setUser: (user: User) => void;
  login: (user: User) => void;
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
      isAuthenticated: false,
      isLoading: false,

      // Authentication actions
      setUser: (user) => set({ user, isAuthenticated: true }),
      login: (user) => set({ user, isAuthenticated: true }),
      logout: () => set({ user: null, isAuthenticated: false }),
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
      version: 1,
      // v0 persisted the access token; it now lives in memory only
      migrate: (persistedState) => {
        const state = persistedState as {
          token?: string | null;
          user: User | null;
          isAuthenticated: boolean;
        };
        delete state.token;
        return state;
      },
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);

export default useStore;
