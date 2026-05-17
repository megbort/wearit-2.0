'use client';

import React from 'react';
import { Drawer, Typography, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTranslations } from 'next-intl';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ open, onClose }) => {
  const t = useTranslations('CartDrawer');

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        className: 'w-full sm:w-[400px] bg-wearit-white dark:bg-zinc-900',
      }}
    >
      <div className="flex flex-col h-full p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4 border-b border-wearit-grey dark:border-zinc-700 pb-4">
          <Typography
            variant="h6"
            className="font-bold text-wearit-black dark:text-wearit-white"
            style={{ fontFamily: 'var(--font-comfortaa)' }}
          >
            {t('title')}
          </Typography>
          <IconButton
            onClick={onClose}
            sx={{ color: '#ff3d5c', '&:hover': { color: '#76dbbf' } }}
          >
            <FontAwesomeIcon icon={faTimes} />
          </IconButton>
        </div>

        {/* Cart Content */}
        <div className="flex-1">
          <Typography className="text-wearit-grey-darker text-center mt-8">
            {t('empty')}
          </Typography>
        </div>

        {/* Checkout Section */}
        <div className="border-t border-wearit-grey dark:border-zinc-700 pt-4 mt-4">
          {/* Discounts */}
          <div className="flex justify-between items-center mb-2">
            <Typography className="text-wearit-black dark:text-wearit-white">{t('discount')}</Typography>
            <Typography className="text-wearit-green font-bold">
              -$0.00
            </Typography>
          </div>

          {/* Total */}
          <div className="flex justify-between items-center mb-4">
            <Typography
              variant="h6"
              className="font-bold text-wearit-black dark:text-wearit-white"
              style={{ fontFamily: 'var(--font-comfortaa)' }}
            >
              {t('total')}
            </Typography>
            <Typography
              variant="h6"
              className="font-bold text-wearit-black dark:text-wearit-white"
              style={{ fontFamily: 'var(--font-comfortaa)' }}
            >
              $0.00
            </Typography>
          </div>

          {/* Checkout Button */}
          <button className="w-full bg-wearit-red hover:bg-wearit-pink text-white font-bold py-3 px-4 rounded transition-colors duration-200 mb-3">
            {t('checkout')}
          </button>

          {/* Shipping Note */}
          <Typography className="text-wearit-grey-darker text-sm">
            {t('taxNote')}
          </Typography>
        </div>
      </div>
    </Drawer>
  );
};

export default CartDrawer;
