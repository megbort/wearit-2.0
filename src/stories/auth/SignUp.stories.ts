import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect, within } from 'storybook/test';
import SignupPage from '@/app/auth/signup/page';

const meta: Meta<typeof SignupPage> = {
  title: 'Auth/SignUp',
  component: SignupPage,
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

    await expect(canvas.getByLabelText('First Name')).toBeInTheDocument();
    await expect(canvas.getByLabelText('Last Name')).toBeInTheDocument();
    await expect(canvas.getByLabelText('Email')).toBeInTheDocument();
    await expect(canvas.getByLabelText('Password')).toBeInTheDocument();
    await expect(
      canvas.getByRole('button', { name: 'Create Account' }),
    ).toBeInTheDocument();
  },
};
