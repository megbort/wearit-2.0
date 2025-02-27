import type { Meta, StoryObj } from '@storybook/react';
import ProductCard from '../../components/ui/ProductCard';
import { Product } from '@/services/models/product';

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

const product: Product = {
  id: '01',
  name: 'Store Item 1',
  price: 29.99,
  sale: true,
  imageUrl:
    'https://res.cloudinary.com/dm1yyjg7i/image/upload/v1726339974/wearit/clothing-item-02_u2qn0c.jpg',
  colors: ['black', 'white', 'blue'],
  sizes: ['xs', 'sm', 'm', 'l', 'xl'],
  details: [
    'Long sleeve tee with buttons',
    'Flexible neckband',
    '100% Cotton Jersey, 180GSM',
    'Made in the USA',
  ],
};

export const Default: Story = {
  args: {
    product,
  },
};
