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
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const open = Boolean(menuAnchor);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setMenuAnchor(null);
  };

  return (
    <header className="w-full">
      <div className="bg-wearit-yellow flex justify-center py-1 text-xs md:text-sm font-bold">
        <p>Free shipping for orders over 50$ 🔥🔥🔥</p>
      </div>
      <nav className="bg-wearit-black flex items-center justify-between p-4 md:p-8 h-[100px]">
        <div>
          <Link href={'/'}>
            <Image
              src="https://res.cloudinary.com/dm1yyjg7i/image/upload/v1725737661/wearitlogo-wt_1_flpak3.svg"
              alt="Wearit Logo"
              width={175}
              height={175}
            />
          </Link>
        </div>

        {/* Mobile Menu */}
        <ThemeProvider theme={theme}>
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
              anchorEl={menuAnchor}
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
              <MenuItem
                onClick={handleClose}
                className="text-wearit-red hover:bg-neutral-500/15"
              >
                <Link href={'/products'}>New Arrivals</Link>
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                className="text-wearit-red hover:bg-neutral-500/15"
              >
                <Link href={'/products'}>Apparel</Link>
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                className="text-wearit-red hover:bg-neutral-500/15"
              >
                <Link href={'/products'}>Accessories</Link>
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                className="text-wearit-red hover:bg-neutral-500/15"
              >
                <Link href={'/products'}>On Sale</Link>
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                className="text-wearit-red hover:bg-neutral-500/15"
              >
                <Link href={'/products'}>Account</Link>
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                className="text-wearit-red hover:bg-neutral-500/15"
              >
                <Link
                  href={'/products'}
                  className="text-wearit-red hover:bg-neutral-500/15"
                >
                  Cart
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </ThemeProvider>

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

        <div className="hidden lg:flex basis-[200px] justify-center gap-10">
          <FontAwesomeIcon
            icon={faUser}
            style={{ fontSize: '22px' }}
            className="text-wearit-red hover:text-wearit-green hover:cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faCartShopping}
            style={{ fontSize: '22px' }}
            className="text-wearit-red hover:text-wearit-green hover:cursor-pointer"
          />
        </div>
      </nav>
    </header>
  );
}
