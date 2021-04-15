import React from 'react';

// Libraries
import {makeStyles, Container, Typography} from '@material-ui/core';

const RequestDetails: React.FC = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.detailsContainer}>
        <div className={classes.column1}>
          <Typography variant="body1">Title</Typography>
          <Typography variant="body1">Event Name</Typography>
          <Typography variant="body1">Distribution Date</Typography>
        </div>

        <div className={classes.column2}>
          <Typography variant="body1" style={{fontWeight: 'bold'}}>
            : Merit Certificates
          </Typography>
          <Typography variant="body1" style={{fontWeight: 'bold'}}>
            : Innovision
          </Typography>
          <Typography variant="body1" style={{fontWeight: 'bold'}}>
            : 05/02/2021
          </Typography>
        </div>
      </div>

      <Typography variant="body1" className={classes.message}>
        {'Respected Sir, \n'}
        {
          'I am attatching the following certificated that need to be approved by day end., \n'
        }
        {'Regards, \n'}
        {'Abhishek Yadav, \n'}
      </Typography>
    </Container>
  );
};

export default RequestDetails;

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    minHeight: '60%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  detailsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  column1: {
    width: '50%',
  },
  column2: {
    width: '50%',
  },
  message: {
    marginTop: 50,
  },
}));
