'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faCartShopping,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import theme from '../theme/theme';
import { ThemeProvider } from '@emotion/react';

export default function Navbar() {
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState<null | HTMLElement>(
    null
  );
  const [accountMenuAnchor, setAccountMenuAnchor] =
    useState<null | HTMLElement>(null);
  const open = Boolean(mobileMenuAnchor);
  const userMenuOpen = Boolean(accountMenuAnchor);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleUserClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAccountMenuAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setMobileMenuAnchor(null);
    setAccountMenuAnchor(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <header className="w-full">
        <div className="bg-wearit-yellow flex justify-center py-1 text-caption">
          <p>Free shipping for orders over 50$ 🔥🔥🔥</p>
        </div>
        <nav className="bg-wearit-black flex items-center justify-between p-4 md:p-8 h-[100px]">
          <div>
            <Link href={'/'}>
              <Image
                src="wearit/wearit-logo-v3_cj1le4.png"
                alt="Wearit Logo"
                width={200}
                height={200}
                priority
              />
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Button
              id="menu-button"
              aria-controls={open ? 'menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <FontAwesomeIcon
                icon={open ? faTimes : faBars}
                className="text-wearit-red hover:text-wearit-green"
                style={{ fontSize: '24px' }}
              />
            </Button>
            <Menu
              id="menu"
              anchorEl={mobileMenuAnchor}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'menu-button',
              }}
              slotProps={{
                paper: {
                  className: 'bg-wearit-white w-[200px]',
                },
              }}
            >
              <MenuItem onClick={handleClose}>
                <Link href={'/products'} className="w-full">
                  New Arrivals
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href={'/products'} className="w-full">
                  Apparel
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href={'/products'} className="w-full">
                  Accessories
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href={'/products'} className="w-full">
                  On Sale
                </Link>
              </MenuItem>
            </Menu>
          </div>

          {/* Web Menu */}
          <div className="hidden lg:flex gap-4 lg:gap-8 xl:gap-20 flex-grow justify-center items-center">
            <Link
              href={'/products'}
              className="title text-wearit-red hover:text-wearit-green"
            >
              New Arrivals
            </Link>
            <Link
              href={'/products'}
              className="title text-wearit-red hover:text-wearit-green"
            >
              Apparel
            </Link>
            <Link
              href={'/products'}
              className="title text-wearit-red hover:text-wearit-green"
            >
              Accessories
            </Link>
            <Link
              href={'/products'}
              className="title text-wearit-red hover:text-wearit-green"
            >
              On Sale
            </Link>
          </div>

          <div className="hidden lg:flex basis-[200px] justify-center items-center gap-6">
            <Button
              onClick={handleUserClick}
              aria-controls={userMenuOpen ? 'user-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={userMenuOpen ? 'true' : undefined}
            >
              <FontAwesomeIcon
                icon={faUser}
                style={{ fontSize: '22px' }}
                className="text-wearit-red hover:text-wearit-green hover:cursor-pointer"
              />
            </Button>
            <Menu
              id="user-menu"
              anchorEl={accountMenuAnchor}
              open={userMenuOpen}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              slotProps={{
                paper: {
                  className: 'bg-wearit-white w-[150px]',
                },
              }}
            >
              <MenuItem onClick={handleClose}>
                <Link href={'/auth/login'} className="w-full">
                  Login
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href={'/auth/signup'} className="w-full">
                  Sign Up
                </Link>
              </MenuItem>
            </Menu>
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ fontSize: '22px' }}
              className="text-wearit-red hover:text-wearit-green hover:cursor-pointer"
            />
          </div>
        </nav>
      </header>
    </ThemeProvider>
  );
}
