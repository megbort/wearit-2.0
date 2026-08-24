import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect, fn, screen, userEvent, within } from 'storybook/test';
import SelectDropdown from '../../components/ui/Select';

const items = [
  { value: 'sm', label: 'Small' },
  { value: 'm', label: 'Medium' },
  { value: 'l', label: 'Large' },
];

const meta: Meta<typeof SelectDropdown> = {
  title: 'Components/Select',
  component: SelectDropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    placeholder: 'Select a size',
    items,
    value: '',
    onChange: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Select a size')).toBeInTheDocument();

    const trigger = canvas.getByRole('combobox');
    await userEvent.click(trigger);

    const option = await screen.findByRole('option', { name: 'Medium' });
    await userEvent.click(option);

    await expect(args.onChange).toHaveBeenCalledTimes(1);
  },
};
