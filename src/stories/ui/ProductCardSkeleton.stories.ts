import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ProductCardSkeleton from '../../components/ui/ProductCardSkeleton';

const meta: Meta<typeof ProductCardSkeleton> = {
  title: 'Components/ProductCardSkeleton',
  component: ProductCardSkeleton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A skeleton loading component that matches the ProductCard dimensions and layout. Used to show loading states while product data is being fetched.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const MultipleSkeletons: Story = {
  render: () => {
    return React.createElement(
      'div',
      { className: 'flex gap-4 flex-wrap' },
      React.createElement(ProductCardSkeleton, { key: '1' }),
      React.createElement(ProductCardSkeleton, { key: '2' }),
      React.createElement(ProductCardSkeleton, { key: '3' }),
      React.createElement(ProductCardSkeleton, { key: '4' })
    );
  },
};
