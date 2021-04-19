import React from 'react';

// Libraries
import {makeStyles, Typography, Menu, MenuItem} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFilter, faCaretDown} from '@fortawesome/free-solid-svg-icons';

// Types
import {MenuOptions} from './CertificateList';

interface CertificateListHeaderProps {
  menuSelected: string;
  setMenuSelected: (param: string) => void;
  MENU_OPTIONS: MenuOptions;
}

const CertificateListHeader: React.FC<CertificateListHeaderProps> = ({
  menuSelected,
  setMenuSelected,
  MENU_OPTIONS,
}) => {
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
      {Object.keys(MENU_OPTIONS).map((key: string) => (
        <MenuItem
          key={key}
          onClick={() => {
            setMenuSelected(MENU_OPTIONS[key as keyof MenuOptions]);
            handleMenuClose();
          }}
        >
          {MENU_OPTIONS[key as keyof MenuOptions]}
        </MenuItem>
      ))}
    </Menu>
  );

  return (
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
      {renderMenu}
    </div>
  );
};

export default CertificateListHeader;

const useStyles = makeStyles(theme => ({
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
