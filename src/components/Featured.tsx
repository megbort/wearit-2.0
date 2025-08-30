'use client';

import { Products } from '@/services/mocks/products';
import ProductCard from './ui/ProductCard';
import ProductCardSkeleton from './ui/ProductCardSkeleton';
import { Product } from '@/services/models/product';
import CustomButton from './ui/Button';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Featured() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Loading time for demo purposes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const renderSkeletons = () => {
    return Array.from({ length: 8 }, (_, index) => (
      <ProductCardSkeleton key={`skeleton-${index}`} />
    ));
  };

  return (
    <div className="py-12 flex flex-col items-center">
      <h3 className="pb-8 px-4 font-bold">New Featured Items ✨</h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {isLoading
          ? renderSkeletons()
          : Products.slice(0, 8).map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
      <div className="py-8">
        <Link href={'products'}>
          <CustomButton variant="primary">View More</CustomButton>
        </Link>
      </div>
    </div>
  );
}
