import React from 'react';

// Libraries
import {makeStyles, useMediaQuery} from '@material-ui/core';

// Components
import DesktopNavbar from './DesktopNavbar';

const Navbar: React.FC = () => {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width: 600px)');

  return <DesktopNavbar />;
};

export default Navbar;

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100px',
  },
}));
