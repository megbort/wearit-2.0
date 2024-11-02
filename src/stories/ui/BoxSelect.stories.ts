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
  args: {
    title: 'Select an option',
    boxSize: 100,
    items: [
      { value: 'Option 1', selected: false },
      { value: 'Option 2', selected: true },
      { value: 'Option 3', selected: false },
    ],
  },
};
