import type { Meta, StoryObj } from '@storybook/react';
import LoginPage from '@/app/auth/login/page';

const meta: Meta<typeof LoginPage> = {
  title: 'Auth/Login',
  component: LoginPage,
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
