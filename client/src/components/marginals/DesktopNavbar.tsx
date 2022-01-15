import React from 'react';

// Libraries
import { makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Link as NavLink } from 'react-scroll';

// Assets
import LOGOS from '../../assets/imgs/logos';
import { HOMEPAGE_CONTENT } from '../../assets/placeholder';

const DesktopNavbar: React.FC<{ showBackground?: boolean }> = ({
  showBackground,
}) => {
  const classes = useStyles({ showBackground });

  return (
    <div className={classes.stickyContainer}>
      <div className={classes.container}>
        <NavLink
          to={HOMEPAGE_CONTENT.NAV.LANDING}
          smooth
          className={classes.imgContainer}
        >
          <img src={LOGOS.ONE} alt="Signit Logo" className={classes.img} />
        </NavLink>

        <nav className={classes.navContainer}>
          <NavLink to={HOMEPAGE_CONTENT.NAV.ABOUT} smooth>
            <Typography variant="h4" className={classes.menuItem}>
              About Us
            </Typography>
          </NavLink>

          <NavLink to={HOMEPAGE_CONTENT.NAV.FEATURES} smooth>
            <Typography variant="h4" className={classes.menuItem}>
              Features
            </Typography>
          </NavLink>

          {/* <Link to="/viewCertificate" style={{textDecoration: 'none'}}>
            <Typography variant="h4" className={classes.menuItem}>
              Receive Certificate
            </Typography>
          </Link> */}

          {/* <Link to="/signup" style={{textDecoration: 'none'}}>
            <Typography
              variant="h4"
              className={`${classes.menuItem} ${classes.coloured}`}
            >
              Sign In
            </Typography>
          </Link> */}
        </nav>
      </div>
    </div>
  );
};

export default DesktopNavbar;

const useStyles = makeStyles(() => ({
  stickyContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 99999,
    // @ts-ignore
    backgroundColor: ({ showBackground }) =>
      showBackground ? '#ffffff' : 'transparent',
    // @ts-ignore
    boxShadow: ({ showBackground }) =>
      showBackground ? '0px 3px 15px #d6d5d5' : '',

    transition: 'background-color 200ms ease',
  },
  container: {
    zIndex: 99999,
    display: 'grid',
    gridTemplateColumns: '0.5fr repeat(5, 1fr) 0.5fr',
    position: 'relative',
    paddingTop: '10px',
    height: '100px',
  },
  imgContainer: {
    gridColumn: '2/3',
    justifySelf: 'start',
    alignSelf: 'center',
    display: 'flex',
  },
  img: {
    width: '50%',
    height: 'auto',
    marginRight: '20px',
  },
  navContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gridColumn: '3/6',
  },
  menuItem: {
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '17px',
    color: '#333333',
    padding: '0px 20px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  coloured: {
    color: '#398ffe',
  },
}));
