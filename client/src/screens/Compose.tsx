import React from 'react';

// Libraries
import {makeStyles} from '@material-ui/core';

// Components
import {
  HalvesTemplate,
  HalvesColumn1,
  HalvesColumn2,
  CertificateDetails,
  Authorizers,
} from '../components';

const Auth: React.FC = () => {
  // ====================== Main Render Function ====================== //
  const classes = useStyles();
  return (
    <HalvesTemplate>
      <HalvesColumn1>
        <CertificateDetails />
        <Authorizers />
      </HalvesColumn1>

      <HalvesColumn2 className={classes.column2}>
        <h1>Hello</h1>
      </HalvesColumn2>
    </HalvesTemplate>
  );
};

export default Auth;

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  column2: {
    position: 'relative',
    maxWidth: '100%',
  },
}));
