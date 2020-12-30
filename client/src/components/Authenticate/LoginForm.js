import React from 'react';
import { Button, Alert, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const LoginForm = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    emailError,
    passwordError,
  } = props;
  return (
    <>
      <h3 className='mt-3 mb-3'>Login</h3>
      <Form>
        <Form.Label>Enter Username</Form.Label>
        <Form.Control
          className='mr-2'
          type='text'
          autoFocus
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <Alert>{emailError}</Alert>

        <Form.Label>Password</Form.Label>
        <Form.Control
          type='password'
          required
          autoComplete='on'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <Alert>{passwordError}</Alert>

        <Button
          variant='secondary'
          type='submit'
          onClick={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          Log In
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
