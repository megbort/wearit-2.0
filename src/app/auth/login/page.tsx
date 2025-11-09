'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import CustomButton from '../../../components/ui/Button';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@emotion/react';
import theme from '../../../theme/theme';
import Link from 'next/link';
import { useLogin } from '../../../hooks/useAuth';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const { login, loading } = useLogin();

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Both fields are required.');
      return;
    }

    try {
      setError('');
      await login(email, password);
      router.push('/'); // redirect home page after login
    } catch (error: unknown) {
      console.error('Login error:', error);

      if (error instanceof Error) {
        setError(error.message || 'Login failed. Please try again.');
      } else if (typeof error === 'string') {
        setError(error);
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
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
          onChange={(event) => setPassword(event.target.value)}
          className="bg-wearit-white opacity-90 rounded-md"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <CustomButton
          variant="primary"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </CustomButton>
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
