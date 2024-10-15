import CategoryCard from './ui/CategoryCard';
import { CategoryItems } from '@/services/mocks/category-items';
import { CategoryItem } from '@/services/models/category-item';

export default function Category() {
  return (
    <div className="flex justify-center py-12">
      <div className="grid lg:grid-cols-2 gap-10">
        {CategoryItems.map((category: CategoryItem) => (
          <CategoryCard key={category.title} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
}
