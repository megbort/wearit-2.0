'use client';
import React from 'react';
import Slider from 'react-slick';

export default function ProductSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
  };

  return (
    <Slider {...settings}>
      {Array.from({ length: 8 }, (_, num) => (
        <div key={num} className="flex justify-center items-center">
          <div className="bg-wearit-grey rounded w-[120px] h-[120px] flex items-center justify-center"></div>
        </div>
      ))}
    </Slider>
  );
}
