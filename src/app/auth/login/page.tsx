'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { ThemeProvider } from '@emotion/react';
import theme from '../../../theme/theme';
import Link from 'next/link';
import { useLogin } from '../../../hooks/useAuth';
import useStore from '../../../services/store/useStore';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [localError, setLocalError] = useState('');
  const router = useRouter();
  const { login, loading } = useLogin();
  const { setNotification } = useStore();

  const handleLogin = async () => {
    if (!email || !password) {
      setLocalError('Both fields are required.');
      return;
    }

    try {
      setLocalError('');
      await login(email, password);
      setNotification({ message: 'Logged in successfully!', severity: 'success' });
      router.push('/');
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : 'Login failed. Please try again.';
      setLocalError(message);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="h-full flex flex-col py-24 m-auto gap-4 max-w-[275px] md:max-w-[550px]">
        <h3 className="text-center">Login</h3>
        <p className="text-center">Enter your email and password to login</p>
        <TextField
          label="Email"
          variant="outlined"
          color="secondary"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-wearit-white opacity-90 rounded-md"
        />
        <TextField
          label="Password"
          variant="outlined"
          color="secondary"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-wearit-white opacity-90 rounded-md"
        />
        <Button
          variant="contained"
          onClick={handleLogin}
          disabled={loading}
          startIcon={loading ? <CircularProgress size={16} color="inherit" /> : null}
          sx={{
            fontFamily: `'Comfortaa', sans-serif`,
            backgroundColor: '#ff3d5c',
            color: '#fff',
            textTransform: 'none',
            '&:hover': { backgroundColor: '#76dbbf' },
            '&.Mui-disabled': { opacity: 0.7, backgroundColor: '#ff3d5c', color: '#fff' },
          }}
        >
          {loading ? 'Logging in...' : 'Login'}
        </Button>
        {localError && <p className="text-red-500 text-sm">{localError}</p>}
        <div>
          <p>
            Don&apos;t have an account?&nbsp;
            <Link href={'signup'} className="text-wearit-green">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default LoginPage;
