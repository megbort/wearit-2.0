import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ProductMiniCard from '../../components/ui/ProductMiniCard';
import { Products } from '@/services/mocks/products';

const meta: Meta<typeof ProductMiniCard> = {
  title: 'Components/ProductMiniCard',
  component: ProductMiniCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    product: Products[0],
  },
};

export const OnSale: Story = {
  args: {
    product: Products[1],
  },
};
