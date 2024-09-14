'use client';
import React from 'react';

interface CustomButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  children,
  disabled = false,
}) => {
  return (
    <button
      className="bg-wearit-red text-white py-2 px-4 rounded hover:bg-wearit-green"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default CustomButton;
