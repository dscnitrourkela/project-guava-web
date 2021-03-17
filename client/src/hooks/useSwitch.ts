import {useState} from 'react';

export default (initialState = false): [boolean, () => void, () => void] => {
  const [state, setState] = useState(initialState);
  const open = () => setState(true);
  const close = () => setState(false);
  return [state, open, close];
};
