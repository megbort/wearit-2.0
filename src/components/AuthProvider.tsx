'use client';

import { useEffect } from 'react';
import { refreshSession } from '@/services/apollo/client';
import useStore from '@/services/store/useStore';

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const setUser = useStore((state) => state.setUser);
  const logout = useStore((state) => state.logout);
  const setLoading = useStore((state) => state.setLoading);

  useEffect(() => {
    // Clean up the token older builds persisted to localStorage
    localStorage.removeItem('auth-token');

    setLoading(true);
    refreshSession()
      .then((session) => {
        if (session) {
          setUser(session.user);
        } else {
          logout();
        }
      })
      .finally(() => setLoading(false));
  }, [setUser, logout, setLoading]);

  return <>{children}</>;
}
