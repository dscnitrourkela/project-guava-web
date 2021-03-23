import React, {useReducer, useMemo, createContext, useContext} from 'react';

// Reducer, Initial State, Types
import {composeReducer} from '../reducers';
import {initialState, InitialStateType, ActionType} from '../action-types';

const ComposeContext = createContext(initialState);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function ComposeProvider(props: any): JSX.Element {
  const [state, dispatch] = useReducer(composeReducer, initialState);
  const value = useMemo(() => [state, dispatch], [state]);
  return <ComposeContext.Provider value={value} {...props} />;
}

export function useCompose(): [
  state: InitialStateType,
  dispatch: React.Dispatch<ActionType>,
] {
  const context = useContext(ComposeContext);
  if (!context)
    throw new Error('useCompose must be used within a ComposeProvider');

  // @ts-ignore
  const [state, dispatch] = context;

  return [state, dispatch];
}
