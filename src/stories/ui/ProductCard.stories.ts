import type { Meta, StoryObj } from '@storybook/react';
import ProductCard from '../../components/ui/ProductCard';
import { StoreItem } from '@/services/models/store-item';

const meta: Meta<typeof ProductCard> = {
  title: 'Components/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const product: StoreItem = {
  id: 1,
  name: 'Sample Product',
  price: 29.99,
  imageUrl:
    'https://res.cloudinary.com/dm1yyjg7i/image/upload/v1726339977/clothing-item-03_yjignx.jpg',
};

export const Default: Story = {
  args: {
    product,
  },
};
