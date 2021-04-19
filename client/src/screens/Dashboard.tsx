import React from 'react';

// Libraries
import {Container, makeStyles, Toolbar} from '@material-ui/core';

// Components
import {DashboardMenu, CertificateList, RequestsList} from '../components';

const Dashboard: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.pageContainer}>
      <DashboardMenu />
      <Toolbar />

      <Container>
        <RequestsList />
        <CertificateList />
      </Container>
    </div>
  );
};

export default Dashboard;

const useStyles = makeStyles(() => ({
  pageContainer: {
    width: '100%',
    maxWidth: '100vw',
    minHeight: '100vh',
    backgroundColor: '#FBFCFD',
  },
}));
