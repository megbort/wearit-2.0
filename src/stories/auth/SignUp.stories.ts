import type { Meta, StoryObj } from '@storybook/react';
import SignupPage from '@/app/auth/signup/page';

const meta: Meta<typeof SignupPage> = {
  title: 'Auth/SignUp',
  component: SignupPage,
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
