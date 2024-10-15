import Image from 'next/image';
import { CategoryItem } from '@/services/models/category-item';
import Link from 'next/link';

interface CategoryCardProps {
  category: CategoryItem;
}

export default function CategoryCard({
  category,
}: Readonly<CategoryCardProps>) {
  return (
    <Link href={'/products'}>
      <div className="h-[400px] w-[300px] md:w-[500px] xl:w-[600px] relative hover:cursor-pointer group">
        <Image
          src={category.imageUrl}
          alt={category.title}
          layout="fill"
          objectFit="cover"
          className="rounded-md transform transition-all duration-300"
        />
        <div className="absolute inset-0 bg-wearit-black opacity-0 transition-opacity duration-300 group-hover:opacity-60 rounded-md"></div>
        <div className="flex items-center rounded-md text-center -translate-x-1/2 md:translate-x-[10%] xl:translate-x-1/3 translate-y-3/4 justify-center w-[200px] h-[100px] absolute top-1/2 left-1/2 bg-stone-900/80 transition-colors duration-300 group-hover:bg-wearit-white">
          <p className="subtitle-1 text-wearit-white p-4 transition-colors duration-300 group-hover:text-wearit-black">
            {category.title}
          </p>
        </div>
      </div>
    </Link>
  );
}
