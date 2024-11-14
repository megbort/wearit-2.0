'use client';
import Image from 'next/image';
import CustomButton from '../components/ui/Button';
import Featured from '@/components/Featured';
import Category from '@/components/Categories';
import cloudinaryLoader from '../utils/custom-image-loader';

export default function Home() {
  const handleClick = () => {
    console.log('Hello');
  };

  return (
    <>
      <div className="relative h-[calc(100vh-140px)] overflow-hidden">
        <Image
          loader={cloudinaryLoader}
          src="wearit/wearit-hero-v2_fdxe1s.jpg"
          alt="Hero Image"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute top-10 left-1/2 md:top-1/4 md:left-3/4 transform -translate-x-1/2 translate-y-1/2 bg-stone-900/80 p-8 rounded w-[300px] md:w-[400px]">
          <h3 className="text-wearit-white">
            Discover more with the WearIt App
          </h3>
          <p className="subtitle-1 text-wearit-white py-4">
            Now available for iPhone and Android
          </p>
          <CustomButton variant="primary" onClick={handleClick}>
            Download Now
          </CustomButton>
        </div>
      </div>
      <Featured></Featured>
      <Category></Category>
    </>
  );
}
