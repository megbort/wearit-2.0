import type { Meta, StoryObj } from '@storybook/react';
import CategoryCard from '../../components/ui/CategoryCard';
import { Category } from '@/services/models/category';

const meta: Meta<typeof CategoryCard> = {
  title: 'Components/CategoryCard',
  component: CategoryCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const category: Category = {
  title: 'Shop New Arrivals',
  imageUrl:
    'https://res.cloudinary.com/dm1yyjg7i/image/upload/wearit/pexels-alteredsnaps-14663631_inzowa.jpg',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    category,
  },
};
