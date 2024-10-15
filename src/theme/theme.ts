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
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: '10px',
        },
        root: {
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#0070f3',
          },
          notchedOutline: {
            borderColor: '#0070f3',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          transform: 'translate(16px, 12px) scale(1)',
          transition: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1)',
          '&.MuiInputLabel-shrink': {
            transform: 'translate(16px, -5px) scale(0.75)',
            color: '#0070f3',
          },
          '&.Mui-focused': {
            transform: 'translate(16px, -5px) scale(0.75)',
            color: '0070f3',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#76dbbf',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#76dbbf',
          },
        },
        icon: {
          color: '#ff3d5c',
        },
      },
    },
  },
});

export default theme;
