import { StoreItems } from '@/services/mocks/store-items';
import ProductCard from './ui/ProductCard';
import { StoreItem } from '@/models/store-item';

export default function Featured() {
  const featuredItems = StoreItems.slice(0, 8);

  return (
    <div className="py-10 flex flex-col items-center">
      <h3 className="pb-8 px-4 font-bold">New Featured Items ✨</h3>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {featuredItems.map((product: StoreItem) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
