import BoxSelect from '@/components/ui/BoxSelect';
import CustomButton from '@/components/ui/Button';
import { Products as ProductsMock } from '@/services/mocks/products';
import Image from 'next/image';

const product = ProductsMock[0];

const colorSelect = {
  title: 'Color',
  boxSize: 75,
  items: product.colors.map((color, index) => ({
    value: color.charAt(0).toUpperCase() + color.slice(1),
    selected: index === 0,
  })),
};

const sizeSelect = {
  title: 'Size',
  boxSize: 40,
  items: product.sizes.map((size, index) => ({
    value: size.toUpperCase(),
    selected: index === 0,
  })),
};

export default function Product() {
  return (
    <div className="p-32 flex justify-center gap-20">
      <div>
        <div className="w-[350px] h-[350px] relative">
          <Image
            src={product.imageUrl}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </div>
        <div className="flex gap-4 pt-4">
          <div className="bg-neutral-200 h-[75px] w-[75px] rounded"></div>
          <div className="bg-neutral-200 h-[75px] w-[75px] rounded"></div>
          <div className="bg-neutral-200 h-[75px] w-[75px] rounded"></div>
          <div className="bg-neutral-200 h-[75px] w-[75px] rounded"></div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <header>
          <h3>{product.name}</h3>
        </header>
        <p className="subtitle-1 text-neutral-500">${product.price}</p>
        <BoxSelect {...colorSelect} />
        <BoxSelect {...sizeSelect} />
        <CustomButton variant="primary">Add to Cart</CustomButton>
        <p className="text-caption underline hover:cursor-pointer hover:text-wearit-red">
          Size Chart
        </p>
        <div>
          <p className="subtitle-1">Details:</p>
          <ul className="list-disc">
            {product.details.map((item) => (
              <li className="text-body-1 ml-4" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
