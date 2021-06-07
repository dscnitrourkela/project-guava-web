import React, {useState, useEffect} from 'react';

// Libraries
import {useMediaQuery} from '@material-ui/core';

// Components
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

const Navbar: React.FC = () => {
  const matches = useMediaQuery('(max-width: 850px)');
  const [showBackground, setShowBackground] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 65) {
      setShowBackground(true);
    } else {
      setShowBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
  }, []);

  return matches ? (
    <MobileNavbar showBackground={showBackground} />
  ) : (
    <DesktopNavbar showBackground={showBackground} />
  );
};

export default Navbar;
