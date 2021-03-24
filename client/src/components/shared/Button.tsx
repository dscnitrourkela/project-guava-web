import React from 'react';

// Libraries
import {makeStyles, Button, CircularProgress} from '@material-ui/core';
import {Link} from 'react-router-dom';

export interface ButtonProps {
  label: string;
  // @ts-ignore
  onClick: (...args) => void;
  loading?: boolean;
  setLoading?: (loading: boolean) => void;
  type?: 'text' | 'outlined' | 'contained' | undefined;
  link?: string;
  className?: string;
  disabled?: boolean;
}

function CustomButton({
  type = 'contained',
  label,
  onClick,
  loading,
  setLoading,
  link,
  className,
  disabled = false,
}: ButtonProps): JSX.Element {
  const classes = useStyles();

  const handleClick = () => {
    if (setLoading) setLoading(true);
    onClick();
  };

  return (
    <div className={classes.root}>
      {link ? (
        <Link to={link}>
          <Button
            className={`${classes.button} ${className}`}
            variant="outlined"
            color="primary"
            disabled={disabled}
          >
            {label}
          </Button>
        </Link>
      ) : (
        <Button
          className={`${classes.button} ${className}`}
          onClick={handleClick}
          variant={type}
          color="primary"
          disableElevation
        >
          {loading ? (
            <CircularProgress size={20} className={classes.circularProgress} />
          ) : (
            <span>{label}</span>
          )}
        </Button>
      )}
    </div>
  );
}

export default CustomButton;

const useStyles = makeStyles(theme => ({
  root: {},
  button: {
    minWidth: '100px',
    height: '40px',
    fontSize: '14px',
    borderRadius: '4px',
    textTransform: 'none',
  },
  circularProgress: {
    color: theme.palette.common.white,
  },
}));
