import React from 'react';

// Libraries
import {makeStyles, Container, Typography} from '@material-ui/core';
import {useHistory} from 'react-router-dom';

// Assets
import LOGOS from '../../assets/imgs/logos';

const DesktopNavbar: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Container className={classes.container}>
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
    </Container>
  );
};

export default DesktopNavbar;

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '0px 30px',
    position: 'relative',
  },
  img: {
    width: '10%',
    height: 'auto',
    marginRight: '20px',
  },
  navContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  menuItem: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '17px',
    color: '#333333',
    padding: '30px 20px',
  },
  coloured: {
    color: '#398ffe',
  },
}));
