/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './src/utils/custom-image-loader.ts',
  },
};

export default nextConfig;
