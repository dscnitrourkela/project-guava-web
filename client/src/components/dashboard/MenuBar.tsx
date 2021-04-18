import React from 'react';

// Libraries
import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Container,
  InputBase,
} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

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
      anchorOrigin={{vertical: 'top', horizontal: 'right'}}
      id={menuId}
      keepMounted
      transformOrigin={{vertical: 'top', horizontal: 'right'}}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <AppBar position="fixed" className={classes.appbar}>
      <Toolbar>
        <Container className={classes.root}>
          <img className={classes.logo} src={LOGOS.ONE} alt="Signit logo" />

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
              className={classes.search}
            />

            {/* <Typography variant="body1" className={classes.search}>
              Search
            </Typography> */}
          </div>

          <div className={classes.menuContainer}>
            <CustomButton
              label="Add New"
              onClick={() => createBrowserHistory.push('/compose')}
              className={classes.button}
            />

            <IconButton
              onClick={handleProfileMenuOpen}
              aria-label="account of current user"
              role="button"
              aria-controls={menuId}
              aria-haspopup="true"
            >
              <img
                className={classes.profileImage}
                src="https://res.cloudinary.com/dalqfvowk/image/upload/badges_user/z2kd6ghrzkturciyltns.jpg"
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
  search: {
    flex: 1,
  },
  menuContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
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
