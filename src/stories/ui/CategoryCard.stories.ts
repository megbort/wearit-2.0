import type { Meta, StoryObj } from '@storybook/react';
import CategoryCard from '../../components/ui/CategoryCard';
import { CategoryItem } from '@/services/models/category-item';

const meta: Meta<typeof CategoryCard> = {
  title: 'Components/CategoryCard',
  component: CategoryCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const category: CategoryItem = {
  title: 'Shop New Arrivals',
  imageUrl:
    'https://res.cloudinary.com/dm1yyjg7i/image/upload/v1725586090/pexels-alteredsnaps-14663663_pjqwsy.jpg',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    category,
  },
};