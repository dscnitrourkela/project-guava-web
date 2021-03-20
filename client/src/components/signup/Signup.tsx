import React from 'react';

// Libraries
import {makeStyles, Typography} from '@material-ui/core';

// Componenets
import {CustomTextInput, CustomButton} from '../shared';

export interface SignUpProps {
  setStageToOnboarding: () => void;
  name: string | number;
  setName: (event: React.BaseSyntheticEvent) => void;
  organization: string | number;
  setOrganization: (event: React.BaseSyntheticEvent) => void;
  designation: string | number;
  setDesignation: (event: React.BaseSyntheticEvent) => void;
  email: string | number;
  setEmail: (event: React.BaseSyntheticEvent) => void;
  phoneNumber: string | number;
  setPhoneNumber: (event: React.BaseSyntheticEvent) => void;
  password: string | number;
  setPassword: (event: React.BaseSyntheticEvent) => void;
  confirmPassword: string | number;
  setConfirmPassword: (event: React.BaseSyntheticEvent) => void;
}

function FirstStage({
  setStageToOnboarding,
  name,
  setName,
  organization,
  setOrganization,
  designation,
  setDesignation,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
}: SignUpProps): JSX.Element {
  const classes = useStyles();

  return (
    <>
      <Typography variant="body1" className={classes.title}>
        Create an Account
      </Typography>

      <CustomTextInput
        value={name}
        onChange={setName}
        required
        variant="outlined"
        label="Name"
      />

      <CustomTextInput
        value={organization}
        onChange={setOrganization}
        select
        required
        variant="outlined"
        label="Organization"
        options={[
          {
            label: 'NIT Rourkela',
            value: 'NIT Rourkela',
          },
          {
            label: 'Monday Morning',
            value: 'Monday Morning',
          },
          {
            label: 'DSC NIT Rourkela',
            value: 'DSC NIT Rourkela',
          },
        ]}
      />

      <CustomTextInput
        value={designation}
        onChange={setDesignation}
        select
        required
        variant="outlined"
        label="Designation"
        options={[
          {
            label: 'Vice President',
            value: 'Vice President',
          },
          {
            label: 'President',
            value: 'President',
          },
          {
            label: 'President',
            value: 'President',
          },
        ]}
      />

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
        value={phoneNumber}
        onChange={setPhoneNumber}
        required
        variant="outlined"
        label="Phone Number"
        type="number"
      />

      <CustomTextInput
        value={password}
        onChange={setPassword}
        required
        variant="outlined"
        label="Password"
        type="password"
      />

      <CustomTextInput
        value={confirmPassword}
        onChange={setConfirmPassword}
        required
        variant="outlined"
        label="Confirm Password"
        type="password"
      />

      <Typography variant="body2" className={classes.statement}>
        Already have an account?{' '}
        <span
          role="button"
          tabIndex={0}
          onClick={() => {}}
          onKeyDown={() => {}}
          className={classes.login}
        >
          Login
        </span>
      </Typography>

      <CustomButton
        className={classes.signup}
        label="Proceed"
        // eslint-disable-next-line
        onClick={setStageToOnboarding}
      />
    </>
  );
}

export default FirstStage;

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  statement: {},
  login: {
    color: theme.palette.primary.dark,
    fontWeight: 'bold',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  signup: {
    marginTop: '20px',
  },
}));
