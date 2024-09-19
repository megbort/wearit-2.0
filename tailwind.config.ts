import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        'wearit-blue': '#0070f3',
        'wearit-green': '#76dbbf',
        'wearit-pink': '#ff89c4',
        'wearit-red': '#ff3d5c',
        'wearit-yellow': '#ffc04d',
        'wearit-black': '#202020',
        'wearit-white': '#fafafa',
      },
    },
  },
  plugins: [],
};
export default config;
