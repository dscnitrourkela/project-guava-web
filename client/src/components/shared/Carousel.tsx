import React from 'react';
import Slider, {Settings} from 'react-slick';

const Carousel: React.FC<Settings> = ({children, ...rest}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...rest,
  };

  return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;
