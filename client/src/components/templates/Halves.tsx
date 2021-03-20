import React from 'react';

// Libraries
import {makeStyles} from '@material-ui/core';

export interface CommonProps {
  children: React.ReactNode;
  className?: string;
}

export function HalvesColumn1({children, className}: CommonProps): JSX.Element {
  const classes = useStyles();

  return (
    <div className={`${classes.column1} ${classes.overflow} ${className}`}>
      {children}
    </div>
  );
}

export function HalvesColumn2({children, className}: CommonProps): JSX.Element {
  const classes = useStyles();

  return (
    <div className={`${classes.column2} ${classes.overflow} ${className}`}>
      {children}
    </div>
  );
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
    width: '100%',
    height: '100vh',
    minHeight: '700px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    // backgroundColor: theme.palette.background.paper,
  },
  column1: {
    height: '100vh',
    minHeight: '700px',
    width: '30%',
    maxWidth: '30%',
    paddingBottom: '30px',
    backgroundColor: theme.palette.background.default,
  },
  column2: {
    height: '100vh',
    minHeight: '700px',
    width: '70%',
    maxWidth: '70%',
    backgroundColor: theme.palette.background.paper,
  },
  overflow: {
    overflowY: 'scroll',
    overflowX: 'hidden',
    '-ms-overflow-style': 'none',
    'scrollbar-width': 'none',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
}));
