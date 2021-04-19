import React from 'react';

// Libraries
import {
  AppBar,
  makeStyles,
  Toolbar,
  Container,
  Typography,
} from '@material-ui/core';
import {Link} from 'react-router-dom';

// Assets
import {LOGOS} from '../../assets/imgs';

const MenuBar: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appbar}>
      <Toolbar>
        <Container className={classes.root}>
          <Link to="/">
            <img className={classes.logo} src={LOGOS.ONE} alt="Signit logo" />
          </Link>

          <Typography variant="body1" className={classes.title}>
            My Certificates
          </Typography>

          <Typography variant="body1" className={classes.email}>
            dummy@dum.com
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default MenuBar;

const useStyles = makeStyles(theme => ({
  appbar: {
    backgroundColor: theme.palette.common.white,
    borderBottom: '1px solid #E5E5E5',
    boxShadow: 'none',
  },
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: '100px',
    height: 'auto',
    marginRight: '25px',
  },
  title: {
    lineHeight: 1.5,
    fontSize: '16px',
    fontWeight: 'normal',
    padding: '5px 10px',
    flex: 1,
    color: '#000000',

    paddingLeft: '25px',
    borderLeft: '1px solid rgba(0, 0, 0, 0.1);',
  },
  email: {
    lineHeight: 1.5,
    fontSize: '16px',
    fontWeight: 'normal',
    padding: '5px 10px',
    color: '#000000',
  },
}));
