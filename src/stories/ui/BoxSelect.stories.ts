import type { Meta, StoryObj } from '@storybook/react';
import BoxSelect from '../../components/ui/BoxSelect';

const meta: Meta<typeof BoxSelect> = {
  title: 'Components/CategorBoxSelectyCard',
  component: BoxSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
