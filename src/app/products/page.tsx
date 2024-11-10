import ProductCard from '../../components/ui/ProductCard';
import { Products as ProductsMock } from '@/services/mocks/products';
import { Product } from '@/services/models/product';
import CustomButton from '../../components/ui/Button';
import SelectDropdown from '../../components/ui/Select';

const sortBySelect = {
  placeholder: 'Sort by',
  items: [
    { value: 'featured', label: 'Featured' },
    { value: 'sale', label: 'On Sale' },
    { value: 'priceHigh', label: 'Price high to low' },
    { value: 'priceLow', label: 'Price low to high' },
  ],
};

const categorySelect = {
  placeholder: 'Category',
  items: [
    { value: 'pants', label: 'Pants' },
    { value: 'tees', label: 'Tees' },
    { value: 'sweaters', label: 'Sweaters' },
    { value: 'shorts', label: 'Shorts' },
    { value: 'jackets', label: 'Jackets' },
  ],
};

export default function Products() {
  return (
    <div className="py-12 px-2 md:px-10 w-full lg:max-w-5xl xl:max-w-7xl mx-auto">
      <header className="p-4 text-center">
        <h3 className="font-bold">Products</h3>
      </header>
      <div className="flex flex-wrap justify-between pb-12">
        <SelectDropdown {...categorySelect} />
        <SelectDropdown {...sortBySelect} />
      </div>
      <div className="grid gap-4 md:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {ProductsMock.map((product: Product) => (
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
