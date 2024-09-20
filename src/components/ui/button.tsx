'use client';
import React from 'react';

interface CustomButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  children,
  disabled = false,
  variant = 'primary',
}) => {
  const baseClass = 'py-2 px-4 rounded';
  const primaryClass = 'bg-wearit-red text-white hover:bg-wearit-green';
  const secondaryClass =
    'text-wearit-red border-2 border-wearit-red hover:border-wearit-green hover:text-wearit-green';

  const buttonClass = `${baseClass} ${
    variant === 'primary' ? primaryClass : secondaryClass
  }`;

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default CustomButton;
