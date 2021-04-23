import React from 'react';

// Libraries
import {Container, makeStyles} from '@material-ui/core';

// Components
import {CustomButton} from '../components';

const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <CustomButton onClick={() => {}} link="/login" className={classes.button}>
        Login
      </CustomButton>

      <CustomButton
        onClick={() => {}}
        link="/signup"
        className={classes.button}
      >
        Signup
      </CustomButton>

      <CustomButton
        onClick={() => {}}
        link="/dashboard"
        className={classes.button}
      >
        Dashboard
      </CustomButton>

      <CustomButton
        onClick={() => {}}
        link="/compose"
        className={classes.button}
      >
        Compose
      </CustomButton>

      <CustomButton
        onClick={() => {}}
        link="/approve"
        className={classes.button}
      >
        Approve
      </CustomButton>

      <CustomButton
        onClick={() => {}}
        link="/viewCertificate"
        className={classes.button}
      >
        View Certificate
      </CustomButton>
    </Container>
  );
};

export default Home;

const useStyles = makeStyles(() => ({
  root: {
    width: '65%',
    height: 'auto',
    minHeight: window.innerHeight,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 20,
  },
}));
