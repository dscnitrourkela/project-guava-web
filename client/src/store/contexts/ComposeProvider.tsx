import React, {useReducer, useMemo, createContext, useContext} from 'react';

// Reducer
import {composeReducer, ActionType} from '../reducers';
import {InitialStateType} from '../action-types';

const initialState = {
  certificateDetails: {
    title: '',
    eventName: '',
    date: new Date(Date.now()),
    time: new Date(Date.now()),
  },
  authorizerDetails: [],
};

// export interface AuthorizerType {
//   id: string;
//   name: string;
//   message: string;
//   scale: number;
//   position: {x: number; y: number};
// }

// export interface InitialStateType {
//   certificateDetails: {
//     title: string;
//     eventName: string;
//     date: Date;
//     time: Date;
//   };
//   authorizerDetails: AuthorizerType[];
// }

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
