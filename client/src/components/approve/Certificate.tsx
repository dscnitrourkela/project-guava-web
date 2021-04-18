import React from 'react';
import {initialState} from '../../store/action-types';

// components
import {Canvas} from '../compose';

const Certificate: React.FC = () => {
  const [state] = React.useState({
    ...initialState,
    certificateImageDetails: {
      imageDimensions: {
        width: 788,
        height: 530,
      },
      stageDimensions: {
        width: 550,
        height: 550,
      },
      src:
        'https://res.cloudinary.com/dalqfvowk/image/upload/v1618758151/project-guava/static/kl3p9y5bd9h1u6dfnoon.png',
    },
    recipientName: {
      ...initialState.recipientName,
      position: {
        x: 409,
        y: 275,
      },
    },
    validationDetails: {
      ...initialState.validationDetails,
      position: {
        x: 177,
        y: 441,
      },
    },
  });

  return <Canvas isPreview state={state} />;
};

export default Certificate;
