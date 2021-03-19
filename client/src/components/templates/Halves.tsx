import React from 'react';

// Libraries
import {makeStyles} from '@material-ui/core';

export interface CommonProps {
  children: React.ReactNode;
  className?: string;
}

export function HalvesColumn1({children, className}: CommonProps): JSX.Element {
  const classes = useStyles();

  return <div className={`${classes.column1} ${className}`}>{children}</div>;
}

export function HalvesColumn2({children, className}: CommonProps): JSX.Element {
  const classes = useStyles();

  return <div className={`${classes.column2} ${className}`}>{children}</div>;
}

export function HalvesTemplate({
  children,
  className,
}: CommonProps): JSX.Element {
  const classes = useStyles();

  return <div className={`${classes.container} ${className}`}>{children}</div>;
}

const useStyles = makeStyles(theme => ({
  container: {
    width: window.innerWidth,
    minHeight: window.innerHeight,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  column1: {
    minHeight: window.innerHeight,
    width: '30%',
  },
  column2: {
    minHeight: window.innerHeight,
    width: '70%',
    backgroundColor: theme.palette.background.paper,
  },
}));
