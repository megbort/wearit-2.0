'use client';

import React, { useState } from 'react';
import ProductCard from '../../components/ui/ProductCard';
import { Products as ProductMocks } from '@/services/mocks/products';
import { Product } from '@/services/models/product';
import CustomButton from '../../components/ui/Button';
import SelectDropdown from '../../components/ui/Select';
import { CategoryType } from '@/services/models/category';

const sortBySelect = {
  placeholder: 'Sort by',
  items: [
    { value: 'all', label: 'All Products' },
    { value: 'featured', label: 'Featured' },
    { value: 'sale', label: 'On Sale' },
    { value: 'priceHigh', label: 'Price high to low' },
    { value: 'priceLow', label: 'Price low to high' },
  ],
};

const categorySelect = {
  placeholder: 'Category',
  items: [
    { value: 'all', label: 'All Categories' },
    { value: CategoryType.Pants, label: 'Pants' },
    { value: CategoryType.Tees, label: 'Tees' },
    { value: CategoryType.Sweaters, label: 'Sweaters' },
    { value: CategoryType.Shorts, label: 'Shorts' },
    { value: CategoryType.Jackets, label: 'Jackets' },
  ],
};

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSort, setSelectedSort] = useState<string>('all');
  const [visibleCount, setVisibleCount] = useState(8);

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

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setVisibleCount(8);
  };

  const handleSortChange = (sort: string) => {
    setSelectedSort(sort);
    setVisibleCount(8);
  };

  const showMoreProducts = () => {
    setVisibleCount((prev) => prev + 8);
  };

  return (
    <div className="py-12 mb-8 px-2 md:px-10 w-full lg:max-w-5xl xl:max-w-7xl mx-auto">
      <header className="p-4 text-center">
        <h3 className="font-bold">Products</h3>
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
            Clear Category
          </CustomButton>
        </div>
        <div className="flex flex-col-reverse md:flex-row">
          <CustomButton variant="text" onClick={() => setSelectedSort('all')}>
            Clear Sort
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
        {visibleProducts.map((product: Product) => (
          <div key={product.id} className="flex justify-center">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      {visibleCount < filteredProducts.length && (
        <div className="py-8 text-center">
          <CustomButton variant="primary" onClick={showMoreProducts}>
            Show More
          </CustomButton>
        </div>
      )}
    </div>
  );
}
