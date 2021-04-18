import React from 'react';

// Libraries
import {Container, makeStyles} from '@material-ui/core';

// Components
import {CustomButton} from '../components';

const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <CustomButton
        type="outlined"
        label="Login"
        link="/login"
        onClick={() => {}}
        className={classes.button}
      />

      <CustomButton
        type="outlined"
        label="Signup"
        link="/signup"
        onClick={() => {}}
        className={classes.button}
      />

      <CustomButton
        type="outlined"
        label="Dashboard"
        link="/dashboard"
        onClick={() => {}}
        className={classes.button}
      />

      <CustomButton
        type="outlined"
        label="Compose"
        link="/compose"
        onClick={() => {}}
        className={classes.button}
      />

      <CustomButton
        type="outlined"
        label="Approve"
        link="/approve"
        onClick={() => {}}
        className={classes.button}
      />
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
