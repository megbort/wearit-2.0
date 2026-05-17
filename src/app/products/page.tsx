'use client';

import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/ui/ProductCard';
import ProductCardSkeleton from '../../components/ui/ProductCardSkeleton';
import { Products as ProductMocks } from '@/services/mocks/products';
import { Product } from '@/services/models/product';
import CustomButton from '../../components/ui/Button';
import SelectDropdown from '../../components/ui/Select';
import { CategoryType } from '@/services/models/category';
import { useTranslations } from 'next-intl';

export default function Products() {
  const t = useTranslations('ProductsPage');

  const sortBySelect = {
    placeholder: t('sortPlaceholder'),
    items: [
      { value: 'all', label: t('allProducts') },
      { value: 'featured', label: t('featured') },
      { value: 'sale', label: t('onSale') },
      { value: 'priceHigh', label: t('priceHighToLow') },
      { value: 'priceLow', label: t('priceLowToHigh') },
    ],
  };

  const categorySelect = {
    placeholder: t('categoryPlaceholder'),
    items: [
      { value: 'all', label: t('allCategories') },
      { value: CategoryType.Pants, label: t('pants') },
      { value: CategoryType.Tees, label: t('tees') },
      { value: CategoryType.Sweaters, label: t('sweaters') },
      { value: CategoryType.Shorts, label: t('shorts') },
      { value: CategoryType.Jackets, label: t('jackets') },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSort, setSelectedSort] = useState<string>('all');
  const [visibleCount, setVisibleCount] = useState(8);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleCategoryChange = (category: string) => {
    setIsLoading(true);
    setSelectedCategory(category);
    setVisibleCount(8);

    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  };

  const handleSortChange = (sort: string) => {
    setIsLoading(true);
    setSelectedSort(sort);
    setVisibleCount(8);

    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  };

  const getFilteredProducts = () => {
    let filteredProducts = ProductMocks.filter(
      (product) =>
        selectedCategory === 'all' || product.category === selectedCategory
    );
    if (selectedSort === 'sale') {
      filteredProducts = filteredProducts.filter((product) => product.sale);
    } else if (selectedSort === 'featured') {
      filteredProducts = filteredProducts.filter((product) => product.featured);
    } else if (selectedSort === 'priceHigh') {
      filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
    } else if (selectedSort === 'priceLow') {
      filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
    }
    return filteredProducts;
  };

  const filteredProducts = getFilteredProducts();
  const visibleProducts = filteredProducts.slice(0, visibleCount);

  const showMoreProducts = () => {
    setVisibleCount((prev) => prev + 8);
  };

  const renderSkeletons = () => {
    return Array.from({ length: visibleCount }, (_, index) => (
      <div key={`skeleton-${index}`} className="flex justify-center">
        <ProductCardSkeleton />
      </div>
    ));
  };

  return (
    <div className="py-12 mb-8 px-2 md:px-10 w-full lg:max-w-5xl xl:max-w-7xl mx-auto">
      <header className="p-4 text-center">
        <h3 className="font-bold">{t('heading')}</h3>
      </header>
      <div className="flex flex-col sm:flex-row justify-between items-center pb-12">
        <div className="flex flex-col md:flex-row">
          <SelectDropdown
            placeholder={categorySelect.placeholder}
            items={categorySelect.items}
            value={selectedCategory}
            onChange={(event) => handleCategoryChange(event.target.value)}
          />
          <CustomButton
            variant="text"
            onClick={() => setSelectedCategory('all')}
          >
            {t('clearCategory')}
          </CustomButton>
        </div>
        <div className="flex flex-col-reverse md:flex-row">
          <CustomButton variant="text" onClick={() => setSelectedSort('all')}>
            {t('clearSort')}
          </CustomButton>
          <SelectDropdown
            placeholder={sortBySelect.placeholder}
            items={sortBySelect.items}
            value={selectedSort}
            onChange={(event) => handleSortChange(event.target.value)}
          />
        </div>
      </div>
      <div className="grid gap-4 md:gap-8 lg:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {isLoading
          ? renderSkeletons()
          : visibleProducts.map((product: Product) => (
              <div key={product.id} className="flex justify-center">
                <ProductCard product={product} />
              </div>
            ))}
      </div>
      {visibleCount < filteredProducts.length && (
        <div className="py-8 text-center">
          <CustomButton variant="primary" onClick={showMoreProducts}>
            {t('showMore')}
          </CustomButton>
        </div>
      )}
    </div>
  );
}
