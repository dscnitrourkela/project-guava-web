import React from 'react';

// Libraries
import {makeStyles, Typography} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';

// Components
import {CustomButton} from '../shared';

// State Handlers
import {useCompose} from '../../store/contexts';

function Proceed(): JSX.Element {
  const [loading, setLoading] = React.useState(false);
  const [proceed, setProceed] = React.useState(false);
  const [state] = useCompose();

  const {
    certificateDetails: {title, eventName, date, time},
    certificateImageDetails: {src},
    authorizerDetails,
  } = state;

  React.useEffect(() => {
    (() => {
      if (
        title &&
        eventName &&
        date &&
        time &&
        src &&
        authorizerDetails.filter(
          ({name, message}) => name !== '' && message !== '',
        ).length > 0
      ) {
        setProceed(true);
      } else {
        setProceed(false);
      }
    })();
    if (loading) setTimeout(() => setLoading(false), 3000);
  }, [loading, title, eventName, date, time, src, authorizerDetails]);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      {proceed ? (
        <CustomButton
          loading={loading}
          setLoading={setLoading}
          onClick={() => setLoading(true)}
        >
          Proceed
        </CustomButton>
      ) : (
        <div className={classes.infoContainer}>
          <FontAwesomeIcon
            className={classes.icon}
            size="lg"
            icon={faInfoCircle}
          />
          <Typography className={classes.typography} variant="body2">
            Certificates will be automatically distributed on scheduled day and
            time.
          </Typography>
        </div>
      )}
    </div>
  );
}

export default Proceed;

const useStyles = makeStyles(() => ({
  root: {
    width: '30%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '10px',
    position: 'fixed',
    bottom: '0px',
    backgroundColor: '#ffffff',
    borderTop: '1px solid rgba(0,0,0,0.23)',
    zIndex: 100,
  },
  infoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: '10px 25px',
  },
  typography: {
    color: 'rgba(0,0,0,0.23)',
    lineHeight: '1rem',
  },
  icon: {
    color: 'rgba(0,0,0,0.23)',
    marginRight: '15px',
  },
}));
