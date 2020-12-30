import React from 'react';
import { Redirect } from 'react-router-dom';

const ProtectedRouter = (props) => {
  const Component = props.component;
  const isAuthenticated = false;
  return isAuthenticated ? <Component /> : <Redirect to={{ pathname: '/Authenticate' }} />;
};
export default ProtectedRouter;
