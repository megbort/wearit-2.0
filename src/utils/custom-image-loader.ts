import { ImageLoader } from 'next/image';

const cloudinaryLoader: ImageLoader = ({ src, width, quality }) => {
  if (src.startsWith('http://') || src.startsWith('https://')) return src;

  const qualityValue = quality ?? 75;
  return `https://res.cloudinary.com/dm1yyjg7i/image/upload/c_scale,w_${width},q_${qualityValue}/${src}`;
};

export default cloudinaryLoader;
