import React from 'react';

// Libraries
import {makeStyles, Container, Typography} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faUser,
  faTimesCircle,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

// Utils
import createBrowserHistory from '../../utils/createBrowserHistory';

function DetailsMenu(): JSX.Element {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <FontAwesomeIcon
          className={classes.back}
          size="lg"
          icon={faArrowLeft}
          onClick={createBrowserHistory.goBack}
          onKeyDown={createBrowserHistory.goBack}
          role="button"
        />

        <div className={classes.profileContainer}>
          <FontAwesomeIcon className={classes.user} size="2x" icon={faUser} />

          <div className={classes.nameContainer}>
            <Typography variant="body2" className={classes.name}>
              Prabhas Srivastava
            </Typography>

            <Typography variant="body2" className={classes.date}>
              10/01/2021
            </Typography>
          </div>
        </div>
      </div>

      <Typography variant="body2" className={classes.discardText}>
        Reject
        <FontAwesomeIcon
          className={classes.discard}
          size="lg"
          icon={faTimesCircle}
        />
      </Typography>
    </Container>
  );
}

export default DetailsMenu;

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '70px',
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid rgba(0,0,0,0.23)',
  },
  backText: {
    color: theme.palette.primary.main,
    height: 'auto',
    margin: '20px 0px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  back: {
    color: theme.palette.primary.main,
    marginRight: '20px',
  },
  discardText: {
    // @ts-ignore
    color: theme.palette.accent.red,
    height: 'auto',
    margin: 'auto 0px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  discard: {
    marginLeft: '10px',
  },
  profileContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  user: {
    marginRight: '10px',
  },
  nameContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  name: {
    width: '100%',
    textAlign: 'left',
  },
  date: {
    color: 'rgba(0,0,0,0.6)',
    width: '100%',
    textAlign: 'left',
  },
}));
