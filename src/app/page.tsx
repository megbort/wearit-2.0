import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative w-full h-[calc(100vh-152px)] overflow-hidden">
      <Image
        src="https://res.cloudinary.com/dm1yyjg7i/image/upload/v1725739367/full-shot-friends-arena-hero_bnkvkd.jpg"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/4 left-3/4 transform -translate-x-1/2 translate-y-1/2 bg-stone-900/90 opacity-80 p-8 rounded w-[400px]">
        <h3 className="text-wearit-white opacity-100">
          Discover more with the WearIt App
        </h3>
        <p className="subtitle-1 text-wearit-white py-4">
          Now available for iPhone and Android
        </p>
        <p className="text-wearit-white">button</p>
      </div>
    </div>
  );
}
