import {useState} from 'react';

export default (
  initialState = 0,
): [
  number,
  () => void,
  () => void,
  (event: React.BaseSyntheticEvent) => void,
  () => void,
] => {
  const [state, setState] = useState<number>(initialState);
  const set = (event: React.BaseSyntheticEvent): void =>
    setState(event.target.value);
  const increment = (): void => setState((current: number) => current + 1);
  const decrement = (): void => setState((current: number) => current - 1);
  const reset = (): void => setState(initialState);
  return [state, increment, decrement, set, reset];
};
