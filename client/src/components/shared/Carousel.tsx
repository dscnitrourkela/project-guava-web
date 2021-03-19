import React from 'react';
import Slider from 'react-slick';

function Carousel({children}): JSX.Element {
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
