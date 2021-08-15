import React from 'react';

// Libraries
import {ButtonBase, makeStyles, Typography} from '@material-ui/core';
import {useHistory} from 'react-router-dom';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({className}) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={`${classes.heroContainer} ${className}`}>
      <Typography variant="h2" className={classes.title}>
        Sign certificates virtually and safely.
      </Typography>

      <Typography variant="body1" className={classes.description}>
        Manage all your certificates at one place. Upload certificate template
        and associated data. Request signatures from authorities and set dates
        fro automatic distribution. Manage queries and complaints.
      </Typography>

      <div className={classes.buttonContainer}>
        <ButtonBase
          className={classes.button}
          onClick={() => history.push('/dashboard')}
        >
          <Typography variant="body2" className={classes.typography}>
            Get Started
          </Typography>
        </ButtonBase>
        <ButtonBase
          className={classes.button}
          onClick={() => history.push('/viewCertificate')}
        >
          <Typography variant="body2" className={classes.typography}>
            Receive Certificate
          </Typography>
        </ButtonBase>
      </div>
    </div>
  );
};

export default Hero;

const useStyles = makeStyles(theme => ({
  heroContainer: {
    width: '100%',
    height: 'auto',

    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'left',
    flexDirection: 'column',
  },
  title: {
    fontFamily: "'Source Serif Pro', serif",
    fontSize: '4rem',
    lineHeight: '4.5rem',
    color: '#000000',

    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: '2.25rem',
      lineHeight: '2.81rem',
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      width: '80%',
      fontSize: '1.45rem',
      lineHeight: '1.81rem',
    },
  },
  description: {
    fontSize: '1.25rem',
    lineHeight: '1.5rem',
    color: '#B5B5B5',

    width: '85%',
    marginTop: '20px',

    [theme.breakpoints.between('sm', 'md')]: {},
    [theme.breakpoints.between('xs', 'sm')]: {
      width: '80%',
      fontSize: '0.9rem',
      lineHeight: '1.15rem',
    },
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
    transition: 'background-color 300ms ease',

    '&:hover': {
      backgroundColor: '#398FFE',
      color: '#ffffff',
    },
  },
  typography: {
    fontSize: '16px',
  },
}));
