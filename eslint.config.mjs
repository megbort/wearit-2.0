import nextConfig from 'eslint-config-next/core-web-vitals';
import storybook from 'eslint-plugin-storybook';

const config = [
  ...nextConfig,
  ...storybook.configs['flat/recommended'],
];

export default config;
