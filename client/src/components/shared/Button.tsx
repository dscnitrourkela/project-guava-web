import React from 'react';

// Libraries
import {
  makeStyles,
  Button,
  ButtonProps,
  CircularProgress,
} from '@material-ui/core';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

export interface CustomButtonProps
  // eslint-disable-next-line @typescript-eslint/ban-types
  extends ButtonProps {
  onClick: (...args: any) => void;
  variant?: 'text' | 'outlined' | 'contained';
  // color?:
  loading?: boolean;
  setLoading?: (param: boolean) => void;
  link?: string;
  className?: string;
  iconOptions?: FontAwesomeIconProps;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  loading,
  setLoading,
  onClick,
  variant = 'contained',
  link,
  className,
  iconOptions,
  color = 'primary',
  ...rest
}) => {
  const classes = useStyles();

  const handleClick = () => {
    if (setLoading) setLoading(true);
    onClick();
  };

  const ModifiedButton = (
    <Button
      onClick={handleClick}
      color={color}
      variant={link ? 'outlined' : variant}
      className={`${classes.button} ${className}`}
      {...rest}
    >
      {loading ? (
        <CircularProgress size={20} className={classes.circularProgress} />
      ) : (
        <>
          {iconOptions?.icon && (
            <FontAwesomeIcon className={classes.icon} {...iconOptions} />
          )}
          {children}
        </>
      )}
    </Button>
  );

  return link ? <Link to={link}>{ModifiedButton}</Link> : ModifiedButton;
};

export default CustomButton;

const useStyles = makeStyles(theme => ({
  button: {
    width: 'auto',
    minWidth: '100px',
    height: '40px',
    fontSize: '14px',
    borderRadius: '4px',
    textTransform: 'none',
    boxShadow: 'none',
  },
  icon: {
    marginRight: '10px',
  },
  circularProgress: {
    color: theme.palette.common.white,
  },
}));
