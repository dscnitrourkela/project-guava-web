import React from 'react';

// Libraries
import {
  makeStyles,
  Container,
  SwipeableDrawer,
  Typography,
} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

// Assets
import LOGOS from '../../assets/imgs/logos';

// Hooks
import useToggle from '../../hooks/useToggle';

const MobileNavbar: React.FC = () => {
  const classes = useStyles();
  const [isMenuOpen, toggleMenu, setMenuOpen] = useToggle(false);

  return (
    <>
      <Container className={classes.root}>
        <FontAwesomeIcon
          onClick={toggleMenu}
          size="lg"
          icon={faBars}
          className={classes.icon}
        />

        <img src={LOGOS.ONE} alt="Signit Logo" className={classes.img} />
      </Container>

      <SwipeableDrawer
        anchor="left"
        open={isMenuOpen}
        onClose={() => setMenuOpen(false)}
        onOpen={() => setMenuOpen(true)}
        swipeAreaWidth={50}
        style={{zIndex: 10001}}
      >
        <nav className={classes.navContainer}>
          <Typography variant="h4" className={classes.menuItem}>
            About Us
          </Typography>
          <Typography
            variant="h4"
            className={`${classes.menuItem} ${classes.link}`}
          >
            Receive Certificate
          </Typography>
          <Typography
            variant="h4"
            className={`${classes.menuItem} ${classes.link}`}
          >
            Sign In
          </Typography>
        </nav>
      </SwipeableDrawer>
    </>
  );
};

export default MobileNavbar;

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  icon: {
    marginRight: '20px',
    zIndex: 10000,
  },
  img: {
    width: '100px',
    height: 'auto',
  },
  navContainer: {
    minWidth: '150px',
    width: 'auto',
    height: '100vh',

    padding: '20px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  ul: {
    height: '40%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  menuItem: {
    width: '100%',
    padding: '40px auto',
    textAlign: 'left',
    marginBottom: '20px',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
}));
