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
      <div className={classes.container}>
        <Hero className={classes.hero} />
        <Infographics className={classes.infographics} />
        <div className={classes.blueBox} />
      </div>
    </>
  );
};

export default Home;

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    maxWidth: '100vw',
    height: '100vh',

    display: 'grid',
    gridTemplateColumns: '0.5fr repeat(5, 1fr) 0.5fr',
    gridTemplateRows: '1fr 1fr max-content 1fr 1fr',
  },
  hero: {
    gridColumn: '2/4',
    gridRow: '3/4',
  },
  infographics: {
    gridColumn: '4/7',
    gridRow: '2/5',
  },
  blueBox: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(57, 143, 254, 0.65)',
    gridColumn: '6/8',
    gridRow: '1/6',
  },
}));
