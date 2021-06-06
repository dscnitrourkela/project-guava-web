import React from 'react';

// Libraries
import {ButtonBase, makeStyles, Typography} from '@material-ui/core';

const Hero: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.heroContainer}>
      <Typography variant="h2" className={classes.title}>
        Sign certificates virtually and safely.
      </Typography>

      <Typography variant="body1" className={classes.description}>
        Manage all your certificates at one place. Upload certificate template
        and associated data. Request signatures from authorities and set dates
        fro automatic distribution. Manage queries and complaints.
      </Typography>

      <div className={classes.buttonContainer}>
        <ButtonBase className={classes.button}>Get Started</ButtonBase>
        <ButtonBase className={classes.button}>Receive Certificate</ButtonBase>
      </div>
    </div>
  );
};

export default Hero;

const useStyles = makeStyles(theme => ({
  heroContainer: {
    width: '40vw',
    height: 'auto',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    flexDirection: 'column',
  },
  title: {
    fontFamily: "'Source Serif Pro', serif",
    fontSize: '4.25rem',
    lineHeight: '4.81rem',
    color: '#000000',
  },
  description: {
    fontSize: '1.25rem',
    lineHeight: '1.5rem',
    color: '#B5B5B5',

    marginTop: '20px',
  },
  buttonContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '30px',

    [theme.breakpoints.between('xs', 'md')]: {
      display: 'none',
    },
  },
  button: {
    color: '#398FFE',
    border: '1px solid #398FFE',
    borderRadius: '7px',

    padding: '10px 20px',
    marginRight: '20px',
    minWidth: '100px',
    width: 'auto',

    '&:hover': {
      backgroundColor: '#398FFE',
      color: '#ffffff',
    },
  },
}));
