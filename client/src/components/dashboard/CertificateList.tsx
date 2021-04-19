import React from 'react';

// Libraries
import {makeStyles, Container} from '@material-ui/core';

// Components
import CertificateListHeader from './CertificateListHeader';
import {CertificateIcon} from '../widgets';

// Assets
import {CERTIFICATE_LIST, DUMMY_CERTIFICATE} from '../../assets/placeholder';

export interface MenuOptions {
  ALL: string;
  REQUESTS: string;
  INITIATED: string;
}

const MENU_OPTIONS: MenuOptions = {
  ALL: 'All Certificates',
  REQUESTS: 'Approve Requests',
  INITIATED: 'Initiated Requests',
};

const CertificateList: React.FC = () => {
  const [menuSelected, setMenuSelected] = React.useState(MENU_OPTIONS.ALL);

  const renderCertificates = () => {
    const menuSelectedKey = Object.keys(MENU_OPTIONS).filter(
      key => MENU_OPTIONS[key as keyof MenuOptions] === menuSelected,
    )[0];

    return (
      // @ts-ignore
      CERTIFICATE_LIST[menuSelectedKey].map((status, index) => (
        <CertificateIcon
          // eslint-disable-next-line react/no-array-index-key
          key={`${status}-${index}`}
          data={DUMMY_CERTIFICATE}
          status={status}
        />
      ))
    );
  };

  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <CertificateListHeader
        menuSelected={menuSelected}
        setMenuSelected={setMenuSelected}
        MENU_OPTIONS={MENU_OPTIONS}
      />

      <div className={classes.list}>{renderCertificates()}</div>
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
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
}));
