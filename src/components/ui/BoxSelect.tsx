'use client';
import React from 'react';

interface BoxSelectProps {
  title: string;
  boxSize: number;
  items: { value: string; selected: boolean }[];
}

export default function BoxSelect({
  title,
  boxSize,
  items,
}: Readonly<BoxSelectProps>) {
  const [selectedValue, setSelectedValue] = React.useState<string>(
    items.find((item) => item.selected)?.value ?? ''
  );

  const handleChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div>
      <p className="subtitle-1 pb-1">
        {title}:{' '}
        {selectedValue && <span className="text-caption">{selectedValue}</span>}
      </p>
      <div className="flex gap-3">
        {items.map((item) => (
          <button
            key={item.value}
            style={{ width: boxSize, height: boxSize }}
            className={`flex items-center justify-center pt-0.5 border ${
              selectedValue === item.value
                ? 'border-wearit-red text-wearit-red'
                : 'border-wearit-black text-wearit-black'
            } hover:border-wearit-red hover:text-wearit-red hover:cursor-pointer`}
            onClick={() => handleChange(item.value)}
          >
            {item.value}
          </button>
        ))}
      </div>
    </div>
  );
}
