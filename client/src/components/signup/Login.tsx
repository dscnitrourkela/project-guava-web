import React from 'react';

// Libraries
import {makeStyles, Typography} from '@material-ui/core';

// Components
import {CustomTextInput, CustomButton} from '../shared';

export interface LoginProps {
  setStageToSignup: () => void;
  email: string | number;
  setEmail: (event: React.BaseSyntheticEvent) => void;
  password: string | number;
  setPassword: (event: React.BaseSyntheticEvent) => void;
}

function Login({
  setStageToSignup,
  email,
  setEmail,
  password,
  setPassword,
}: LoginProps): JSX.Element {
  const classes = useStyles();

  return (
    <>
      <Typography variant="body1" className={classes.title}>
        Log into your Account
      </Typography>

      <CustomTextInput
        value={email}
        onChange={setEmail}
        required
        variant="outlined"
        label="Email"
        // type="number"
        validationRegex={
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        }
        validationError="Invalid Email"
      />

      <CustomTextInput
        value={password}
        onChange={setPassword}
        required
        variant="outlined"
        label="Password"
        type="password"
      />

      <Typography variant="body2">
        {"Don't have an account? "}
        <span
          role="button"
          tabIndex={0}
          onClick={setStageToSignup}
          onKeyDown={setStageToSignup}
          className={classes.signup}
        >
          Sign Up
        </span>
      </Typography>

      <CustomButton
        className={classes.login}
        // eslint-disable-next-line
        onClick={() => console.log('logged in')}
      >
        Proceed
      </CustomButton>
    </>
  );
}

export default Login;

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  statement: {},
  signup: {
    color: theme.palette.primary.dark,
    fontWeight: 'bold',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  login: {
    marginTop: '20px',
  },
}));
