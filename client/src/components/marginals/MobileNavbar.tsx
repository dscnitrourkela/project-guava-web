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

const MobileNavbar: React.FC<{showBackground?: boolean}> = ({
  showBackground,
}) => {
  const classes = useStyles({showBackground});
  const [isMenuOpen, toggleMenu, setMenuOpen] = useToggle(false);

  return (
    <>
      <Container className={classes.root}>
        <img src={LOGOS.ONE} alt="Signit Logo" className={classes.img} />

        <FontAwesomeIcon
          onClick={toggleMenu}
          size="lg"
          icon={faBars}
          className={classes.icon}
        />
      </Container>

      <SwipeableDrawer
        anchor="right"
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
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 20px',

    position: 'fixed',
    // zIndex: 10001,

    zIndex: 99999,
    // @ts-ignore
    backgroundColor: ({showBackground}) =>
      showBackground ? '#ffffff' : 'transparent',
    // @ts-ignore
    boxShadow: ({showBackground}) =>
      showBackground ? '0px 3px 15px #d6d5d5' : '',
  },
  icon: {
    zIndex: 10000,
    '&:hover': {
      cursor: 'pointer',
    },
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
    textAlign: 'right',
    marginBottom: '20px',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
}));
