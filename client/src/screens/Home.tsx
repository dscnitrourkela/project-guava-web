import React from 'react';

// Libraries
import {Container, makeStyles} from '@material-ui/core';

// Components
import Navbar from '../components/marginals/Navbar';

const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
    </>
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
