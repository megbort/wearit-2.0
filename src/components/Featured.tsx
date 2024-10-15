import { Products } from '@/services/mocks/products';
import ProductCard from './ui/ProductCard';
import { Product } from '@/services/models/product';
import CustomButton from './ui/Button';

export default function Featured() {
  return (
    <div className="py-12 flex flex-col items-center">
      <h3 className="pb-8 px-4 font-bold">New Featured Items ✨</h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {Products.slice(0, 8).map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="py-8">
        <CustomButton variant="primary">Show More</CustomButton>
      </div>
    </div>
  );
}
