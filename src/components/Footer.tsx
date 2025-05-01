'use client';
import {
  faXTwitter,
  faInstagram,
  faTiktok,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import CustomButton from './ui/Button';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@emotion/react';
import theme from '../theme/theme';
import { useState } from 'react';

export default function Footer() {
  const [subscribeMessage, setSubscribeMessage] = useState<boolean>(false);

  const handleSubscribe = () => {
    setSubscribeMessage(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="flex p-8 md:p-4 gap-8 flex-col text-center md:text-left md:flex-row justify-around items-center md:h-[500px] bg-wearit-black">
        <div className="text-wearit-white gap-8">
          <Image
            src="wearit/wearit-logo-v2_xo1gea.png"
            alt="WearIt Logo"
            height={175}
            width={175}
          />
          <div className="flex justify-center pt-2 gap-6">
            <FontAwesomeIcon
              icon={faXTwitter}
              style={{ fontSize: '22px' }}
              className="text-wearit-white hover:text-wearit-blue hover:cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ fontSize: '22px' }}
              className="text-wearit-white hover:text-wearit-blue hover:cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faTiktok}
              style={{ fontSize: '22px' }}
              className="text-wearit-white hover:text-wearit-blue hover:cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ fontSize: '22px' }}
              className="text-wearit-white hover:text-wearit-blue hover:cursor-pointer"
            />
          </div>
        </div>
        <div className="text-wearit-white">
          <ul className="flex flex-col gap-4">
            <li className="title">Main Menu</li>
            <li className="text-body-1 hover:text-wearit-blue hover:cursor-pointer">
              Shop
            </li>
            <li className="text-body-1 hover:text-wearit-blue hover:cursor-pointer">
              New Releases
            </li>
            <li className="text-body-1 hover:text-wearit-blue hover:cursor-pointer">
              Accessories
            </li>
            <li className="text-body-1 hover:text-wearit-blue hover:cursor-pointer">
              Gift Cards
            </li>
            <li className="text-body-1 hover:text-wearit-blue hover:cursor-pointer">
              Last Chance Sale
            </li>
          </ul>
        </div>
        <div className="text-wearit-white ">
          <ul className="flex flex-col gap-4">
            <li className="title">Help</li>
            <li className="text-body-1 hover:text-wearit-blue hover:cursor-pointer">
              Orders & Shipping
            </li>
            <li className="text-body-1 hover:text-wearit-blue hover:cursor-pointer">
              Returns & Refunds
            </li>
            <li className="text-body-1 hover:text-wearit-blue hover:cursor-pointer">
              Sales Terms & Conditions
            </li>
            <li className="text-body-1 hover:text-wearit-blue hover:cursor-pointer">
              Privacy Policy
            </li>
            <li className="text-body-1 hover:text-wearit-blue hover:cursor-pointer">
              Terms of Service
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 max-w-[250px] lg:max-w-[320px] mt-8">
          <p className="text-wearit-white">
            Sign up for our newsletter to get updated on latest collections,
            dales and other news!
          </p>
          <TextField
            label="Name"
            variant="outlined"
            color="secondary"
            className="bg-wearit-white opacity-90 rounded-md"
          />
          <TextField
            label="Email"
            variant="outlined"
            color="secondary"
            className="bg-wearit-white opacity-90 rounded-md"
          />
          <CustomButton variant="primary" onClick={handleSubscribe}>
            Subscribe
          </CustomButton>
          <div className="h-2"></div>
          <p
            className={`text-body-1 text-wearit-green ${
              !subscribeMessage && 'invisible'
            }`}
          >
            A confirmation e-mail has been sent!
          </p>
        </div>
      </div>
      <div className="bg-wearit-yellow text-wearit-black text-center text-caption py-1">
        Designed and built by Megan Krenbrink.
      </div>
    </ThemeProvider>
  );
}
