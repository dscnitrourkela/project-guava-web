import React from 'react';
import {InitialStateType} from '../../store/action-types';

// components
import {Canvas} from '../compose';

interface Props {
  state: InitialStateType;
}

const Certificate: React.FC<Props> = ({state}) => (
  <Canvas isPreview state={state} />
);

export default Certificate;
