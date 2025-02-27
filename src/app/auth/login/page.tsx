'use client';

import CustomButton from '../../../components/ui/Button';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@emotion/react';
import theme from '../../../theme/theme';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="h-full flex flex-col py-24 m-auto gap-4 max-w-[275px] md:max-w-[550px]">
        <h3 className="text-center">Login</h3>
        <p className="text-center">Enter your email and password to login</p>
        <TextField
          label="Email"
          variant="outlined"
          color="secondary"
          className="bg-wearit-white opacity-90 rounded-md"
        />
        <TextField
          label="Password"
          variant="outlined"
          color="secondary"
          className="bg-wearit-white opacity-90 rounded-md"
        />
        <CustomButton variant="primary">Login</CustomButton>
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
