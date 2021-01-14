import React, { useState } from 'react';
import { Button, Card, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
const UserAuth = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;
  return (
    <Card
      className='mt-5'
      style={{
        minWidth: 'fit-content',
        width: '400px',
        maxWidth: '60vw',
        textAlign: 'center',
        margin: 'auto',
        padding: '4rem',
      }}
    >
      {(hasAccount && (
        <div>
          <LoginForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            emailError={emailError}
            passwordError={passwordError}
          />
          <Alert muted>
            Don't have Account{' '}
            <Button variant='outline-info' onClick={() => setHasAccount(false)}>
              Signup
            </Button>
          </Alert>
        </div>
      )) || (
        <div>
          <SignupForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
          />
          <Alert muted>
            Already a user{' '}
            <Button variant='outline-info' onClick={() => setHasAccount(true)}>
              Login
            </Button>
          </Alert>
        </div>
      )}
    </Card>
  );
};
export default UserAuth;
