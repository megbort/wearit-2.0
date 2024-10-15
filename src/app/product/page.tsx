import BoxSelect from '@/components/ui/BoxSelect';

const colorSelect = {
  title: 'Color',
  boxSize: 75,
  items: [
    { value: 'Black', selected: true },
    { value: 'White', selected: false },
    { value: 'Blue', selected: false },
  ],
};

const sizeSelect = {
  title: 'Size',
  boxSize: 40,
  items: [
    { value: 'XS', selected: true },
    { value: 'SM', selected: false },
    { value: 'M', selected: false },
    { value: 'LG', selected: false },
    { value: 'XL', selected: false },
  ],
};

export default function Product() {
  return (
    <div className="px-32 flex justify-center gap-14">
      <div>Image</div>
      <div>
        <header>
          <h3>Title</h3>
        </header>
        <p>Price</p>
        <BoxSelect {...colorSelect} />
        <BoxSelect {...sizeSelect} />
        <p>Button</p>
        <p>Size Chart</p>
        <div>
          <p>Details</p>
          <ul>
            <li>something 1</li>
            <li>something 2</li>
            <li>something 3</li>
            <li>something 4</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
