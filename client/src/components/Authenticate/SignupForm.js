import React, { useState } from 'react';
import { Button, Alert, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const SignupForm = (props) => {
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
      <h3 className='mt-3 mb-3'>Sign Up</h3>
      <Form>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Enter Email</Form.Label>
          <Form.Control
            type='text'
            required
            autoFocus
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Alert>{emailError}</Alert>
        </Form.Group>
        <Form.Group controlId='formBasicPassword'>
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
        </Form.Group>
        <Button
          variant='secondary'
          type='submit'
          onClick={(e) => {
            e.preventDefault();
            handleSignup();
          }}
        >
          Sign Up
        </Button>
      </Form>
    </>
  );
};
export default SignupForm;
