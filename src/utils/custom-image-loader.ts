import { ImageLoader } from 'next/image';

const cloudinaryLoader: ImageLoader = ({ src, width, quality }) => {
  const qualityValue = quality ?? 75;

  return `https://res.cloudinary.com/dm1yyjg7i/image/upload/c_scale,w_${width},q_${qualityValue}/v1729021775/${src}`;
};

export default cloudinaryLoader;
