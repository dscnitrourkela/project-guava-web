import React from 'react';

// Libraries
import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Menu,
  MenuItem,
  Container,
  InputBase,
} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

// Components
import {CustomButton} from '../shared';

// Utils
import {createBrowserHistory} from '../../utils';

// Assets
import {LOGOS} from '../../assets/imgs';

const MenuBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = () => setAnchorEl(null);
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);

  const classes = useStyles();
  const menuId = 'primary-search-account-menu';

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      getContentAnchorEl={null}
      anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
      transformOrigin={{vertical: 'top', horizontal: 'right'}}
      id={menuId}
      keepMounted
      open={isMenuOpen}
      onClose={handleMenuClose}
      classes={{
        paper: classes.menu,
      }}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );

  return (
    <AppBar position="fixed" className={classes.appbar}>
      <Toolbar>
        <Container className={classes.root}>
          <Link to="/">
            <img className={classes.logo} src={LOGOS.ONE} alt="Signit logo" />
          </Link>

          <div className={classes.searchContainer}>
            <FontAwesomeIcon
              className={classes.searchIcon}
              size="lg"
              icon={faSearch}
            />

            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{'aria-label': 'search'}}
            />
          </div>

          <div className={classes.menuContainer}>
            <CustomButton
              onClick={() => createBrowserHistory.push('/compose')}
              className={classes.button}
            >
              Add New
            </CustomButton>

            <IconButton
              onClick={handleProfileMenuOpen}
              aria-label="account of current user"
              role="button"
              aria-controls={menuId}
              aria-haspopup="true"
            >
              <img
                className={classes.profileImage}
                src="https://res.cloudinary.com/riteshsp2000/image/upload/project-guava/assets/Ritesh_ff6rc7.jpg"
                alt="Profile"
              />
            </IconButton>
            {renderMenu}
          </div>
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
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',

    backgroundColor: '#E8E8E8',
    borderRadius: '4px',
    padding: '5px 15px',

    width: '45%',
    height: '45px',
  },
  searchIcon: {
    marginRight: '15px',
    color: 'rgba(0, 0, 0, 0.54)',
  },
  menuContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menu: {
    boxShadow: 'none !important',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #E5E5E5',
    borderTop: '0px',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    marginTop: '2px',
  },
  button: {
    marginRight: '20px',
  },
  profileImage: {
    width: '35px',
    height: '35px',
    borderRadius: '50%',
  },
  inputRoot: {
    color: 'rgba(0, 0, 0, 0.54)',
    width: '100%',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    transition: theme.transitions.create('width'),
    width: '100%',
    flex: 1,
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
