import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect, within } from 'storybook/test';
import ProductMiniCard from '../../components/ui/ProductMiniCard';
import { Products } from '@/services/mocks/products.mock';

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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link');
    await expect(link).toHaveAttribute('href', `/product/${Products[0].id}`);
    await expect(canvas.queryByText('Sale')).not.toBeInTheDocument();
  },
};

export const OnSale: Story = {
  args: {
    product: Products[1],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Sale')).toBeInTheDocument();
  },
};
