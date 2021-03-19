import React from 'react';

// Libraries
import {makeStyles, Typography} from '@material-ui/core';

// Assets
import {SIGNUP as SIGNUP_PLACEHOLDER} from '../../assets/placeholder';
import {SIGNUP as SIGNUP_IMGS, LOGOS} from '../../assets/imgs';

function MobileView(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={LOGOS.ONE} alt="SigNit Login" className={classes.logo} />

      <Typography variant="h2" className={classes.title}>
        <span className={classes.highlight}>
          {SIGNUP_PLACEHOLDER.INTRO.PART1}
        </span>{' '}
        {SIGNUP_PLACEHOLDER.INTRO.PART2}{' '}
        <span className={classes.highlight}>
          {SIGNUP_PLACEHOLDER.INTRO.PART3}
        </span>{' '}
        {SIGNUP_PLACEHOLDER.INTRO.PART4}{' '}
        <span className={classes.highlight}>
          {SIGNUP_PLACEHOLDER.INTRO.PART5}
        </span>
      </Typography>

      <Typography variant="body1" className={classes.title}>
        {SIGNUP_PLACEHOLDER.MOBILE_VIEW}
      </Typography>

      <img
        src={SIGNUP_IMGS.INTRO}
        alt="SigNit Login"
        className={classes.image}
      />
    </div>
  );
}

export default MobileView;

const useStyles = makeStyles(theme => ({
  root: {
    width: window.innerWidth,
    height: window.innerHeight,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
  },
  title: {
    textAlign: 'center',
    marginBottom: 40,
    width: '80%',
    height: 'auto',
  },
  highlight: {
    color: theme.palette.primary.dark,
    height: 'auto',
  },
  logo: {
    width: '40%',
    height: 'auto',
    position: 'absolute',
    top: 150,
  },
  image: {
    width: '100%',
    height: 'auto',
    position: 'absolute',
    bottom: 0,
  },
}));
