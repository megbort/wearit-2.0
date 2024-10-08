import { StoreItem } from '@/services/models/store-item';
import Image from 'next/image';

interface ProductCardProps {
  readonly product: StoreItem;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="w-[300px] h-[300px] flex flex-col justify-between bg-neutral-100 rounded-lg border hover:border-neutral-600 hover:cursor-pointer hover:bg-transparent">
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
  );
}
