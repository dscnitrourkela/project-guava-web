import React from 'react';

// Libraries
import {makeStyles, Container} from '@material-ui/core';

// Components
import CertificateListHeader from './CertificateListHeader';

const MENU_OPTIONS = {
  ALL: 'All Certificates',
  REQUESTS: 'Approve Requests',
  INITIATED: 'Initiated Requests',
};

const CertificateList: React.FC = () => {
  const [menuSelected, setMenuSelected] = React.useState(MENU_OPTIONS.ALL);

  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <CertificateListHeader
        menuSelected={menuSelected}
        setMenuSelected={setMenuSelected}
        MENU_OPTIONS={MENU_OPTIONS}
      />
    </Container>
  );
};

export default CertificateList;

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: '100%',
    minHeight: '100vh',
    overflow: 'hidden',
    margin: '10px auto',
  },
}));
