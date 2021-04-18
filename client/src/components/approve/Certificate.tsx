import React from 'react';
import {InitialStateType} from '../../store/action-types';

// components
import {Canvas} from '../widgets';

interface CertificateProps {
  state: InitialStateType;
}

const Certificate: React.FC<CertificateProps> = ({state}) => (
  <Canvas isPreview state={state} />
);

export default Certificate;
