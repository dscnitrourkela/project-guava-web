import React from 'react';
import { Link } from 'react-router-dom';

const ReactLogo = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <h1>Welcome to React Template</h1>
      <Link to='/Authenticate'>Go to Login</Link>
    </div>
  );
};

export default ReactLogo;
