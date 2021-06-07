import React from 'react';

// Libraries
import {makeStyles, Typography} from '@material-ui/core';
import {useHistory} from 'react-router-dom';

// Assets
import LOGOS from '../../assets/imgs/logos';

const DesktopNavbar: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.stickyContainer}>
      <div className={classes.container}>
        <img src={LOGOS.ONE} alt="Signit Logo" className={classes.img} />

        <nav className={classes.navContainer}>
          <Typography variant="h4" className={classes.menuItem}>
            About Us
          </Typography>
          <Typography variant="h4" className={classes.menuItem}>
            Receive Certificate
          </Typography>
          <Typography
            variant="h4"
            className={`${classes.menuItem} ${classes.coloured}`}
            onClick={() => history.push('/signin')}
          >
            Sign In
          </Typography>
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
  },
  container: {
    display: 'grid',
    gridTemplateColumns: '0.5fr repeat(5, 1fr) 0.5fr',
    position: 'relative',
  },
  img: {
    height: 'auto',
    marginRight: '20px',
    gridColumn: '2/3',
    justifySelf: 'start',
    alignSelf: 'center',
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
    padding: '30px 20px',
  },
  coloured: {
    color: '#398ffe',
  },
}));
