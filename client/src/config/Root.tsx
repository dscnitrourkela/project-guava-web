import React from 'react';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

// import reducers from '../store/reducers';

interface Props {
  initialState?: any;
  children: React.ReactNode;
}

const Root: React.FC<Props> = ({initialState = {}, children}) => {
  const composeEnhancers =
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    // reducers,
    initialState,
    composeEnhancers(applyMiddleware(thunk)),
  );

  return <Provider store={store}>{children}</Provider>;
};

export default Root;
