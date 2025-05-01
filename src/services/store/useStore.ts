import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface StoreState {
  count: number;
  email: string | null;
  increaseCount: () => void;
  resetCount: () => void;
  setUserEmail: (email: string) => void;
}

const useStore = create<StoreState>()(
  persist(
    (set) => ({
      count: 0,
      email: null,
      increaseCount: () => set((state) => ({ count: state.count + 1 })),
      resetCount: () => set({ count: 0 }),
      setUserEmail: (email) => set({ email }),
    }),
    {
      name: 'app-storage',
      partialize: (state) => ({ email: state.email }),
    }
  )
);

export default useStore;
