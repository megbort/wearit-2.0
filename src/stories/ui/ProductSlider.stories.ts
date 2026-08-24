import { createElement } from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect, within } from 'storybook/test';
import ProductSlider from '../../components/ui/ProductSlider';
import { Products } from '@/services/mocks/products.mock';
import useStore from '@/services/store/useStore';

const meta: Meta<typeof ProductSlider> = {
  title: 'Components/ProductSlider',
  component: ProductSlider,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => {
      useStore.setState({ products: Products });
      // Matches the max-w-[900px] wrapper ProductSlider is always rendered
      // inside on the product page (src/app/product/[id]/page.tsx). Without
      // an explicit width, react-slick measures a 0px container on mount
      // and computes garbage slide widths, pushing every slide off-canvas.
      return createElement(
        'div',
        { style: { maxWidth: 900, margin: '0 auto' } },
        Story(),
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentId: Products[0].id,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getAllByAltText(Products[1].name).length,
    ).toBeGreaterThan(0);
    await expect(
      canvas.queryByAltText(Products[0].name),
    ).not.toBeInTheDocument();
  },
};
