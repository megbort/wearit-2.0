import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="w-full">
      <div className="bg-wearit-yellow flex justify-center py-1">
        <p>Free shipping for orders over 50$ 🔥🔥🔥</p>
      </div>
      <nav className="bg-wearit-black flex items-center p-10 h-[120px]">
        <div>
          <Image
            src="https://res.cloudinary.com/dm1yyjg7i/image/upload/v1725737661/wearitlogo-wt_1_flpak3.svg"
            alt="Wearit Logo"
            width={200}
            height={200}
          />
        </div>
        <div className="flex-grow flex justify-center gap-20">
          <p className="title text-wearit-red">New Arrivals</p>
          <p className="title text-wearit-red">Apparel</p>
          <p className="title text-wearit-red">Accessories</p>
          <p className="title text-wearit-red">On Sale</p>
        </div>
        <div className="basis-[200px] flex justify-center gap-10">
          <FontAwesomeIcon
            icon={faUser}
            style={{ fontSize: '24px' }}
            className="text-wearit-red"
          />
          <FontAwesomeIcon
            icon={faCartShopping}
            style={{ fontSize: '24px' }}
            className="text-wearit-red"
          />
        </div>
      </nav>
    </header>
  );
}
