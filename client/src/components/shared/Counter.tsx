import React from 'react';

// Libraries
import {makeStyles} from '@material-ui/core';

export interface CounterProps {
  value: number;
  onChange: (event: React.BaseSyntheticEvent) => void;
  increment: () => void;
  decrement: () => void;
  fullWidth?: boolean;
}

const CustomCounter: React.FC<CounterProps> = ({
  value,
  onChange,
  increment,
  decrement,
  fullWidth = false,
}) => {
  const classes = useStyles(fullWidth);

  return (
    <div className={classes.root}>
      <button onClick={decrement} type="button" className={classes.button}>
        -
      </button>
      <input
        type="number"
        value={value}
        onChange={onChange}
        className={classes.input}
      />
      <button onClick={increment} type="button" className={classes.button}>
        +
      </button>
    </div>
  );
};

export default CustomCounter;

const useStyles = makeStyles(theme => ({
  root: {
    width: fullWidth => (fullWidth ? '100%' : '250px'),
    height: '56px',
    backgroundColor: theme.palette.background.default,
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
    borderTop: '1px solid rgba(0, 0, 0, 0.23)',
    borderBottom: '1px solid rgba(0, 0, 0, 0.23)',
    border: '1px solid rgba(0, 0, 0, 0.23)',
  },
  input: {
    width: '55%',
    height: '100%',
    border: 0,
    backgroundColor: theme.palette.background.default,
    textAlign: 'center',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    '&::-webkit-outer-spin-button': {
      display: 'none',
    },
    '&::-webkit-inner-spin-button': {
      display: 'none',
    },
  },
  button: {
    width: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2rem',
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.background.default,
    height: '100%',
    borderRadius: 4,
    border: 0,
    '&:focus': {
      border: `1px solid ${theme.palette.primary.main}`,
    },
  },
}));
