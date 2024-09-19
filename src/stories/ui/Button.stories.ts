import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CustomButton from '../../components/ui/Button';

const meta: Meta<typeof CustomButton> = {
  title: 'Example/CustomButton',
  component: CustomButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    disabled: { control: 'boolean' },
    variant: {
      control: 'radio',
      options: ['primary', 'secondary'],
    },
  },
  args: { onClick: action('clicked') },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    disabled: false,
    variant: 'secondary',
  },
};
