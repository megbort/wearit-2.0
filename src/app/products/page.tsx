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

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (sort: string) => {
    setSelectedSort(sort);
  };

  const clearCategoryFilter = () => setSelectedCategory('all');
  const clearSortFilter = () => setSelectedSort('all');

  const filteredCategoryResults = ProductMocks.filter((product: Product) => {
    return selectedCategory === 'all' || product.category === selectedCategory;
  });

  let filteredResults = filteredCategoryResults;

  if (selectedSort === 'sale') {
    filteredResults = filteredResults.filter(
      (product: Product) => product.sale
    );
  } else if (selectedSort === 'featured') {
    filteredResults = filteredResults.filter(
      (product: Product) => product.featured
    );
  } else if (selectedSort === 'priceHigh') {
    filteredResults = [...filteredResults].sort(
      (firstProduct, secondProduct) => secondProduct.price - firstProduct.price
    );
  } else if (selectedSort === 'priceLow') {
    filteredResults = [...filteredResults].sort(
      (firstProduct, secondProduct) => firstProduct.price - secondProduct.price
    );
  }

  const sortedProductResults = filteredResults;

  return (
    <div className="py-12 px-2 md:px-10 w-full lg:max-w-5xl xl:max-w-7xl mx-auto">
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
          <CustomButton variant="text" onClick={clearCategoryFilter}>
            Clear Category
          </CustomButton>
        </div>
        <div className="flex flex-col-reverse md:flex-row">
          <CustomButton variant="text" onClick={clearSortFilter}>
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
      <div className="grid gap-4 md:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sortedProductResults.map((product: Product) => (
          <div key={product.id} className="flex justify-center">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div className="py-8 text-center">
        <CustomButton variant="primary">Show More</CustomButton>
      </div>
    </div>
  );
}
