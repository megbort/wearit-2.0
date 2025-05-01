'use client';

import { useState } from 'react';
import CustomButton from '../../../components/ui/Button';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@emotion/react';
import theme from '../../../theme/theme';
import Link from 'next/link';
import useStore from '../../../services/store/useStore';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const setUserEmail = useStore((state) => state.setUserEmail);

  const handleLogin = () => {
    if (!email || !password) {
      setError('Both fields are required.');
      return;
    }

    setUserEmail(email);
    console.log('Logged in as:', email);

    setError('');
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
        <CustomButton variant="primary" onClick={handleLogin}>
          Login
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
