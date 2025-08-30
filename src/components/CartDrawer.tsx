'use client';

import React from 'react';
import { Drawer, Typography, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ open, onClose }) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        className: 'w-full sm:w-[400px] bg-wearit-white',
      }}
    >
      <div className="flex flex-col h-full p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4 border-b border-wearit-grey pb-4">
          <Typography
            variant="h6"
            className="font-bold text-wearit-black"
            style={{ fontFamily: 'var(--font-comfortaa)' }}
          >
            Shopping Cart
          </Typography>
          <IconButton
            onClick={onClose}
            className="text-wearit-red hover:text-wearit-green"
          >
            <FontAwesomeIcon icon={faTimes} />
          </IconButton>
        </div>

        {/* Cart Content */}
        <div className="flex-1">
          <Typography className="text-wearit-grey-darker text-center mt-8">
            Your cart is empty
          </Typography>
        </div>

        {/* Checkout Section */}
        <div className="border-t border-wearit-grey pt-4 mt-4">
          {/* Discounts */}
          <div className="flex justify-between items-center mb-2">
            <Typography className="text-wearit-black">Discount</Typography>
            <Typography className="text-wearit-green font-bold">
              -$0.00
            </Typography>
          </div>

          {/* Total */}
          <div className="flex justify-between items-center mb-4">
            <Typography
              variant="h6"
              className="font-bold text-wearit-black"
              style={{ fontFamily: 'var(--font-comfortaa)' }}
            >
              Total
            </Typography>
            <Typography
              variant="h6"
              className="font-bold text-wearit-black"
              style={{ fontFamily: 'var(--font-comfortaa)' }}
            >
              $0.00
            </Typography>
          </div>

          {/* Checkout Button */}
          <button className="w-full bg-wearit-red hover:bg-wearit-pink text-white font-bold py-3 px-4 rounded transition-colors duration-200 mb-3">
            Proceed to Checkout
          </button>

          {/* Shipping Note */}
          <Typography className="text-wearit-grey-darker text-sm">
            Taxes and shipping calculated at checkout
          </Typography>
        </div>
      </div>
    </Drawer>
  );
};

export default CartDrawer;
