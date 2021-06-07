import React from 'react';

// Libraries
import {makeStyles} from '@material-ui/core';

// Components
import Navbar from '../components/marginals/Navbar';
import Infographics from '../components/homepage/Infographics';
import Hero from '../components/homepage/Hero';
import Features from '../components/homepage/Features';

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
      <Features />
    </>
  );
};

export default Home;

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    maxWidth: '100vw',
    minHeight: '100vh',
    height: '100vh',

    display: 'grid',
    gridTemplateColumns: '0.5fr repeat(5, 1fr) 0.5fr',
    gridTemplateRows: '1fr 1fr max-content 1fr 1fr',

    [theme.breakpoints.between('xs', 'sm')]: {
      gridTemplateRows: '1.5fr 1fr',
      height: 'auto',
    },
  },
  hero: {
    gridColumn: '2/4',
    gridRow: '3/4',
    zIndex: 10000,

    [theme.breakpoints.between('xs', 'sm')]: {
      gridColumn: '2/7',
      gridRow: '2/3',
      alignSelf: 'center',
    },
  },
  infographics: {
    gridColumn: '4/7',
    gridRow: '2/5',

    [theme.breakpoints.between('xs', 'sm')]: {
      gridColumn: '2/7',
      gridRow: '1/2',
      alignSelf: 'end',
    },
  },
  blueBox: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(57, 143, 254, 0.65)',
    gridColumn: '6/8',
    gridRow: '1/6',

    [theme.breakpoints.between('xs', 'sm')]: {
      gridColumn: '6/8',
      gridRow: '1/3',
    },
  },
}));
