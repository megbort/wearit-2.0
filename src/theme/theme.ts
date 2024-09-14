import { createTheme } from '@mui/material/styles';
import { Comfortaa } from 'next/font/google';

const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: `${comfortaa.style.fontFamily}, sans-serif`,
  },
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: `${comfortaa.style.fontFamily}, sans-serif`,
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        list: {
          fontFamily: `${comfortaa.style.fontFamily}, sans-serif`,
        },
      },
    },
  },
});

export default theme;
