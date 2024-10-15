import { Product } from '@/services/models/product';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: Readonly<ProductCardProps>) {
  return (
    <Link href={'/product'}>
      <div className="w-[280px] h-[280px] flex flex-col justify-between bg-neutral-100 rounded-lg border hover:border-neutral-600 hover:cursor-pointer hover:bg-transparent">
        <div className="h-[230px] relative">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover rounded-t-lg"
          />
        </div>
        <div className="h-[70px] text-center p-2 flex flex-col justify-center">
          <p className="text-body-1">{product.name}</p>
          <p className="text-body-1 text-neutral-600">${product.price}</p>
        </div>
      </div>
    </Link>
  );
}
