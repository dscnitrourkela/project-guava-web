import React from 'react';
import Slider from 'react-slick';

// @ts-ignore
function Carousel({children}: {children: React.ReactNode}): JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return <Slider {...settings}>{children}</Slider>;
}

export default Carousel;
