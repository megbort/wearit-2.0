import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect, userEvent, within } from 'storybook/test';
import BoxSelect from '../../components/ui/BoxSelect';

const meta: Meta<typeof BoxSelect> = {
  title: 'Components/BoxSelect',
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('button', { name: 'Option 2' })).toBeInTheDocument();

    const option1 = canvas.getByRole('button', { name: 'Option 1' });
    await userEvent.click(option1);

    await expect(canvas.getAllByText('Option 1')).toHaveLength(2);
  },
};
