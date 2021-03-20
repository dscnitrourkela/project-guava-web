import React, {useState} from 'react';

// Libraries
import {makeStyles, Container, Typography} from '@material-ui/core';

// Components
import {HalvesTemplate, HalvesColumn1, HalvesColumn2} from '../components';

// Hooks
import {useInput} from '../hooks';

const Auth: React.FC = () => {
  // ====================== Main Render Function ====================== //
  const classes = useStyles();
  return (
    <HalvesTemplate>
      <HalvesColumn1>
        <Container className={classes.container}>
          <h2>Hello</h2>
        </Container>
      </HalvesColumn1>

      <HalvesColumn2 className={classes.column2}>
        <h1>Hello</h1>
      </HalvesColumn2>
    </HalvesTemplate>
  );
};

export default Auth;

const useStyles = makeStyles(theme => ({
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
