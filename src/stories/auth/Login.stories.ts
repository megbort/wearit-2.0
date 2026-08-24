import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect, within } from 'storybook/test';
import LoginPage from '@/app/auth/login/page';

const meta: Meta<typeof LoginPage> = {
  title: 'Auth/Login',
  component: LoginPage,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await expect(canvas.getByLabelText('Email')).toBeInTheDocument();
    await expect(canvas.getByLabelText('Password')).toBeInTheDocument();
    await expect(
      canvas.getByRole('button', { name: 'Login' }),
    ).toBeInTheDocument();
  },
};
