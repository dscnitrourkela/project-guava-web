import React from 'react';

// Libraries
import {Container, makeStyles} from '@material-ui/core';

// Components
import Navbar from '../components/marginals/Navbar';
import Infographics from '../components/homepage/Infographics';
import Hero from '../components/homepage/Hero';

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Container className={classes.container}>
        <Hero />
        <Infographics />
      </Container>
    </>
  );
};

export default Home;

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    maxWidth: '100vw',
    minHeight: '90vh',
    height: 'auto',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '100px',
  },
}));
