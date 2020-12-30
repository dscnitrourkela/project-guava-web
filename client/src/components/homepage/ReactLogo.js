import React from 'react';

function ReactLogo() {
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
      <a href='/Authenticate'>Go to Login/Signup</a>
    </div>
  );
}

export default ReactLogo;
