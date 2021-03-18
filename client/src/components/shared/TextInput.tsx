import React from 'react';

// Libraries
import {
  makeStyles,
  TextField,
  InputAdornment,
  MenuItem,
} from '@material-ui/core';

// Hooks
import {useSwitch} from '../../hooks';

export interface SelectOptions {
  value: string | number;
  label: string;
}
export interface TextInputProps {
  value: string | number;
  onChange: (event: React.BaseSyntheticEvent) => void;
  errorText?: string;
  required?: boolean;
  Icon?: React.FC;
  multiline?: boolean;
  variant?: string;
  select?: boolean;
  onSelect?: (event: React.BaseSyntheticEvent) => void;
  options?: SelectOptions[];
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
  select = false,
  options,
  onSelect,
}: TextInputProps): JSX.Element {
  const [error, open, close] = useSwitch(false);

  React.useEffect(() => {
    if (value !== '') close();
  }, [value, close]);

  const handleOnBlur = (event: React.BaseSyntheticEvent): void => {
    if (required && event.target.value === '') open();
    else close();
  };

  // const TextInputBody = (
  //   <TextField
  //     value={value}
  //     onChange={select ? onChange : onSelect}
  //     onBlur={handleOnBlur}
  //     error={error}
  //     helperText={error && errorText}
  //     required={required}
  //     multiline={multiline}
  //     variant={variant}
  //     fullWidth
  //     select={select}
  //     InputProps={{
  //       startAdornment: Icon && (
  //         <InputAdornment style={{marginRight: 10}} position="start">
  //           <Icon />
  //         </InputAdornment>
  //       ),
  //     }}
  //     {...rest}
  //   />
  // );

  const inputProps = {
    value,
    onChange: select ? onChange : onSelect,
    onBlur: handleOnBlur,
    error,
    helperText: error && errorText,
    required,
    multiline,
    variant,
    fullWidth: true,
    select,
    InputProps: {
      startAdornment: Icon && (
        <InputAdornment style={{marginRight: 10}} position="start">
          <Icon />
        </InputAdornment>
      ),
    },
    ...rest,
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      {select ? (
        <TextField {...inputProps}>
          {options?.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      ) : (
        <TextField {...inputProps} />
      )}
    </div>
  );
}

export default CustomTextField;

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
}));
