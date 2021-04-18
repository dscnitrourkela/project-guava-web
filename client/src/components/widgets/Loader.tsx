import React from 'react';

// Libraries
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const LoaderComponent: React.FC = () => (
  <Loader
    type="Audio"
    color="#398FFE"
    height={100}
    width={100}
    timeout={3000}
  />
);

export default LoaderComponent;
