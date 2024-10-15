import CategoryCard from './ui/CategoryCard';
import { Categories } from '@/services/mocks/categories';
import { Category as CategoryItem } from '@/services/models/category';

export default function Category() {
  return (
    <div className="flex justify-center py-12">
      <div className="grid lg:grid-cols-2 gap-10">
        {Categories.map((category: CategoryItem) => (
          <CategoryCard key={category.title} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
}
