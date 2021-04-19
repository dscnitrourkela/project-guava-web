import React from 'react';

// Libraries
import {makeStyles, Typography} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFilter} from '@fortawesome/free-solid-svg-icons';

// Components
import {CertificateIcon} from '../widgets';

// Assets
import {CERTIFICATE_LIST, DUMMY_CERTIFICATE} from '../../assets/placeholder';

const RequestsList: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.titleContainer}>
        <Typography variant="body1" className={classes.title}>
          Received Requests
        </Typography>

        <FontAwesomeIcon
          className={classes.filterIcon}
          size="lg"
          icon={faFilter}
        />
      </div>

      <div className={classes.list}>
        {CERTIFICATE_LIST.REQUESTS.filter(status => status === 'pending').map(
          (status, index) => (
            <CertificateIcon
              // eslint-disable-next-line react/no-array-index-key
              key={`${status}-${index}`}
              data={DUMMY_CERTIFICATE}
              status={status}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default RequestsList;

const useStyles = makeStyles(() => ({
  root: {},
  titleContainer: {
    width: '100%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    borderBottom: '1px solid rgba(0, 0, 0, 0.1);',
  },
  title: {
    lineHeight: 1.5,
    fontSize: '16px',
    fontWeight: 'normal',

    margin: '10px 0px',
  },
  filterIcon: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
}));
