import React from 'react';

// Libraries
import {
  makeStyles,
  Container,
  Typography,
  Menu,
  MenuItem,
} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFilter, faCaretDown} from '@fortawesome/free-solid-svg-icons';

const MENU_OPTIONS = {
  ALL: 'All Certificates',
  REQUESTS: 'Approve Requests',
  INITIATED: 'Initiated Requests',
};

const CertificateList: React.FC = () => {
  const [menuSelected, setMenuSelected] = React.useState(MENU_OPTIONS.ALL);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = () => setAnchorEl(null);
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);

  const classes = useStyles();
  const menuId = 'primary-search-account-menu';

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      getContentAnchorEl={null}
      anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
      transformOrigin={{vertical: 'top', horizontal: 'left'}}
      id={menuId}
      keepMounted
      open={isMenuOpen}
      onClose={handleMenuClose}
      classes={{
        paper: classes.menu,
      }}
    >
      <MenuItem
        onClick={() => {
          setMenuSelected(MENU_OPTIONS.ALL);
          handleMenuClose();
        }}
      >
        {MENU_OPTIONS.ALL}
      </MenuItem>
      <MenuItem
        onClick={() => {
          setMenuSelected(MENU_OPTIONS.INITIATED);
          handleMenuClose();
        }}
      >
        {MENU_OPTIONS.INITIATED}
      </MenuItem>
      <MenuItem
        onClick={() => {
          setMenuSelected(MENU_OPTIONS.REQUESTS);
          handleMenuClose();
        }}
      >
        {MENU_OPTIONS.REQUESTS}
      </MenuItem>
    </Menu>
  );

  return (
    <Container className={classes.container}>
      <div className={classes.header}>
        <Typography
          onClick={handleMenuOpen}
          aria-label="account of current user"
          role="button"
          aria-controls={menuId}
          aria-haspopup="true"
          className={classes.menuText}
          variant="body1"
        >
          {menuSelected}
          <FontAwesomeIcon
            className={classes.menuIcon}
            size="lg"
            icon={faCaretDown}
          />
        </Typography>

        <FontAwesomeIcon
          className={classes.filterIcon}
          size="lg"
          icon={faFilter}
        />
      </div>
      {renderMenu}
    </Container>
  );
};

export default CertificateList;

const useStyles = makeStyles(theme => ({
  container: {
    maxWidth: '100%',
    minHeight: '100vh',
    overflow: 'hidden',
    margin: '10px auto',
  },
  header: {
    width: '100%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    borderBottom: '1px solid rgba(0, 0, 0, 0.1);',
  },
  menuText: {
    lineHeight: 1.5,
    fontSize: '16px',
    fontWeight: 'normal',

    margin: '10px 0px',

    '&:hover': {
      cursor: 'pointer',
    },
  },
  menuIcon: {
    marginLeft: '10px',
  },
  menu: {
    boxShadow: 'none !important',
    backgroundColor: theme.palette.common.white,
    border: '1px solid rgba(0, 0, 0, 0.1);',
    borderTop: '0px',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    marginTop: '10px',
  },
  filterIcon: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));
