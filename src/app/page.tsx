'use client';
import Image from 'next/image';
import CustomButton from '../components/ui/Button';
import Featured from '@/components/Featured';

export default function Home() {
  const handleClick = () => {
    console.log('Hello');
  };

  return (
    <>
      <section className="relative h-[calc(100vh-140px)] overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dm1yyjg7i/image/upload/v1726334119/wearit-hero-v2_fdxe1s.jpg"
          alt="Hero Image"
          quality={100}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-10 left-1/2 md:top-1/4 md:left-3/4 transform -translate-x-1/2 translate-y-1/2 bg-stone-900/80 p-8 rounded w-[300px] md:w-[400px]">
          <h3 className="text-wearit-white">
            Discover more with the WearIt App
          </h3>
          <p className="subtitle-1 text-wearit-white py-4">
            Now available for iPhone and Android
          </p>
          <CustomButton onClick={handleClick}>Download Now</CustomButton>
        </div>
      </section>
      <section>
        <Featured></Featured>
      </section>
    </>
  );
}
