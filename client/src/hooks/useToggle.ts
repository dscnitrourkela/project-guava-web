import {useState} from 'react';

export default (
  initialState = false,
): [boolean, () => void, (state: boolean) => void] => {
  const [state, setState] = useState(initialState);
  const toggle = () => setState(currentState => !currentState);
  return [state, toggle, setState];
};
