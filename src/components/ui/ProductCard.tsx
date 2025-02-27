import { Product } from '@/services/models/product';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: Readonly<ProductCardProps>) {
  return (
    <Link href={`product/${product.id}`}>
      <div className="relative w-[280px] h-[280px] flex flex-col justify-between bg-neutral-100 rounded-lg border hover:border-neutral-600 hover:cursor-pointer hover:bg-transparent">
        {product.sale && (
          <div className="absolute top-0 right-0 z-50 rounded-tr-lg bg-wearit-red text-wearit-white w-[80px] p-1 text-center">
            Sale
          </div>
        )}
        <div className="h-[230px] relative">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover rounded-t-lg"
          />
        </div>
        <div className="h-[70px] text-center p-2 flex flex-col justify-center">
          <p className="text-body-1">{product.name}</p>
          <div className="flex gap-2 justify-center">
            {product.sale ? (
              <>
                <p className="text-body-1 text-neutral-600 line-through">
                  ${product.price}
                </p>
                <p className="text-body-1 text-wearit-red">
                  ${(product.price - 5).toFixed(2)}
                </p>
              </>
            ) : (
              <p className="text-body-1 text-neutral-600">${product.price}</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
