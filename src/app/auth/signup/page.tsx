'use client';

import CustomButton from '../../../components/ui/Button';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@emotion/react';
import theme from '../../../theme/theme';
import Link from 'next/link';

const SignUpPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="h-full flex flex-col py-24 m-auto gap-4 max-w-[275px] md:max-w-[550px]">
        <h3 className="text-center">Sign Up</h3>
        <p className="text-center">Please fill in the information below</p>
        <TextField
          label="First Name"
          variant="outlined"
          color="secondary"
          className="bg-wearit-white opacity-90 rounded-md"
        />
        <TextField
          label="Last Name"
          variant="outlined"
          color="secondary"
          className="bg-wearit-white opacity-90 rounded-md"
        />
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
        <CustomButton variant="primary">Create Account</CustomButton>
        <div>
          <p>
            Already have an account?&nbsp;
            <Link href={'login'} className="text-wearit-green">
              Login
            </Link>
          </p>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default SignUpPage;
