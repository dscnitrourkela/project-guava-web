import React from 'react';

// Libraries
import {makeStyles, Container, Typography} from '@material-ui/core';

// Components
import {
  HalvesTemplate,
  HalvesColumn1,
  HalvesColumn2,
  CustomTextInput,
  CustomButton,
} from '../components';

// Hooks
import {useInput} from '../hooks';

// Assets
import {LOGOS} from '../assets/imgs';

const SignUp: React.FC = () => {
  const [name, setName] = useInput();
  const [organization, setOrganization] = useInput();
  const [designation, setDesignation] = useInput();
  const [email, setEmail] = useInput();
  const [phoneNumber, setPhoneNumber] = useInput();
  const [password, setPassword] = useInput();
  const [confirmPassword, setConfirmPassword] = useInput();

  const classes = useStyles();
  return (
    <HalvesTemplate>
      <HalvesColumn1>
        <Container className={classes.container}>
          <img src={LOGOS.ONE} alt="Logo" className={classes.logo} />

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
            label="SignUp"
            // eslint-disable-next-line
            onClick={() => console.log('clicked')}
          />
        </Container>
      </HalvesColumn1>

      <HalvesColumn2>
        <CustomTextInput
          value={name}
          onChange={setName}
          required
          variant="outlined"
          placeholder="enter a number"
          // type="number"
          validationRegex={
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          }
          validationError="Invalid Email"
        />
      </HalvesColumn2>
    </HalvesTemplate>
  );
};

export default SignUp;

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    width: '40%',
    height: 'auto',
    margin: '30px',
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
