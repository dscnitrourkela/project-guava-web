import {useState} from 'react';

export default (
  initialState: string | number = '',
): [string | number, (state: string | number) => void, () => void] => {
  const [state, setState] = useState<string | number>(initialState);
  const set = value => setState(value);
  const reset = () => setState(initialState);
  return [state, set, reset];
};
