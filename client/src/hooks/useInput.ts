import {useState} from 'react';

export default (
  initialState: string | number = '',
): [string | number, (event: React.BaseSyntheticEvent) => void, () => void] => {
  const [state, setState] = useState<string | number>(initialState);
  const set = (event: React.BaseSyntheticEvent): void =>
    setState(event.target.value);
  const reset = (): void => setState(initialState);
  return [state, set, reset];
};
