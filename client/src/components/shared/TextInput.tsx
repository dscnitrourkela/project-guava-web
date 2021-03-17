import React from 'react';

// Libraries
import {makeStyles, TextField, InputAdornment} from '@material-ui/core';

// Hooks
import {useSwitch} from '../../hooks';

export interface TextInputProps {
  value: string | number;
  onChange: (event: React.BaseSyntheticEvent) => void;
  errorText?: string;
  required?: boolean;
  Icon?: React.FC;
  multiline?: boolean;
  variant?: string;
  [x: string]: any;
}

function CustomTextField({
  value,
  onChange,
  errorText = 'Required Field',
  required = false,
  Icon,
  multiline = false,
  variant = 'outlined',
  rest,
}: TextInputProps): JSX.Element {
  const [error, open, close] = useSwitch(false);

  React.useEffect(() => {
    if (value !== '') close();
  }, [value, close]);

  const handleOnBlur = (event: React.BaseSyntheticEvent): void => {
    if (required && event.target.value === '') open();
    else close();
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TextField
        value={value}
        onChange={onChange}
        onBlur={handleOnBlur}
        error={error}
        helperText={error && errorText}
        required={required}
        InputProps={{
          startAdornment: Icon && (
            <InputAdornment style={{marginRight: 10}} position="start">
              <Icon />
            </InputAdornment>
          ),
        }}
        multiline={multiline}
        variant={variant}
        {...rest}
      />
    </div>
  );
}

export default CustomTextField;

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
}));
