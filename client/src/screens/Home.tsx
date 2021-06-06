import React from 'react';

// Libraries
import {Container, makeStyles} from '@material-ui/core';

// Components
import Navbar from '../components/marginals/Navbar';
import Infographics from '../components/homepage/Infographics';

const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Container className={classes.container}>
        <Infographics />
      </Container>
    </>
  );
};

export default Home;

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    // height: '90vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '100px',
  },
}));
