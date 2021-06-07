import React from 'react';

// Libraries
import {useMediaQuery} from '@material-ui/core';

// Components
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

const Navbar: React.FC = () => {
  const matches = useMediaQuery('(max-width: 850px)');

  return matches ? <MobileNavbar /> : <DesktopNavbar />;
};

export default Navbar;
