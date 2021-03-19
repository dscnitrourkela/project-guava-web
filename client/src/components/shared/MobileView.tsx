import React from 'react';

// Libraries
import {makeStyles, Typography} from '@material-ui/core';

function MobileView(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img
        src="https://res.cloudinary.com/dalqfvowk/image/upload/project-guava/static/udeggzj6lo4hqeilftjk.png"
        alt="SigNit Login"
        className={classes.logo}
      />

      <Typography variant="h2" className={classes.title}>
        <span className={classes.highlight}>Sign</span> Certificates and
        Documents <span className={classes.highlight}>virtually</span> and{' '}
        <span className={classes.highlight}>safely!</span>
      </Typography>

      <Typography variant="body1" className={classes.title}>
        SigNit is currently best suited for work on a desktop or laptop. We
        encourage you to use it via the same.
      </Typography>

      <img
        src="https://res.cloudinary.com/dalqfvowk/image/upload/project-guava/static/sra37p7a9i5mylunhuht.png"
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
