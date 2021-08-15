import React from 'react';

// Libraries
import {makeStyles} from '@material-ui/core';
import {Element} from 'react-scroll';

// Components
import Navbar from '../components/marginals/Navbar';
import Infographics from '../components/homepage/Infographics';
import Hero from '../components/homepage/Hero';
import Features from '../components/homepage/Features';
import About from '../components/homepage/About';
import Footer from '../components/marginals/Footer';

// Assets
import {HOMEPAGE_CONTENT} from '../assets/placeholder';

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Element
        name={HOMEPAGE_CONTENT.NAV.LANDING}
        className={classes.container}
      >
        <Hero className={classes.hero} />
        <Infographics className={classes.infographics} />
        <div className={classes.blueBox} />
      </Element>

      <Element
        name={HOMEPAGE_CONTENT.NAV.FEATURES}
        style={{padding: '30px 0px'}}
      >
        <Features />
      </Element>

      <Element name={HOMEPAGE_CONTENT.NAV.ABOUT}>
        <About />
      </Element>
      <Footer />
    </>
  );
};

export default Home;

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    maxWidth: '100vw',
    height: '100vh',
    minHeight: '100vh',

    display: 'grid',
    gridTemplateColumns: '0.5fr repeat(5, 1fr) 0.5fr',
    gridTemplateRows: '1fr 1fr max-content 1fr 1fr',

    [theme.breakpoints.between('xs', 'sm')]: {
      gridTemplateRows: '1.2fr 1fr',
      height: 'auto',
    },
  },
  hero: {
    gridColumn: '2/4',
    gridRow: '3/4',
    zIndex: 10000,
    height: 'calc(100vh-100px)',
    marginTop: '100px',

    [theme.breakpoints.between('xs', 'sm')]: {
      gridColumn: '2/7',
      gridRow: '2/3',
      alignSelf: 'start',
    },
  },
  infographics: {
    gridColumn: '4/7',
    gridRow: '2/5',
    height: 'calc(100vh-100px)',
    marginTop: '100px',

    [theme.breakpoints.between('xs', 'sm')]: {
      gridColumn: '2/7',
      gridRow: '1/2',
      alignSelf: 'end',
    },

    [theme.breakpoints.up('lg')]: {
      width: '85%',
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
