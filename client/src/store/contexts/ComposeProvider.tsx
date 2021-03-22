/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable import/prefer-default-export */
import React, {useReducer, useMemo, createContext, useContext} from 'react';

// Reducer
import {composeReducer} from '../reducers';

const initialState = {
  certificateDetails: {
    title: '',
    eventName: '',
    date: new Date(Date.now()),
    time: new Date(Date.now()),
  },
};

// @ts-ignore
const ComposeContext = createContext();

export function ComposeProvider(props: any): JSX.Element {
  const [state, dispatch] = useReducer(composeReducer, initialState);
  const value = useMemo(() => [state, dispatch], [state]);
  return <ComposeContext.Provider value={value} {...props} />;
}

export function useCompose() {
  const context = useContext(ComposeContext);
  if (!context)
    throw new Error('useCompose must be used within a ComposeProvider');
  // @ts-ignore
  const [state, dispatch] = context;

  return [state, dispatch];
}
