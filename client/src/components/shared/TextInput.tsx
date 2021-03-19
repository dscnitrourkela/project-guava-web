import React from 'react';

// Libraries
import {
  makeStyles,
  TextField,
  InputAdornment,
  MenuItem,
  OutlinedTextFieldProps,
} from '@material-ui/core';

// Hooks
import {useSwitch} from '../../hooks';

export interface SelectOptions {
  value: string | number;
  label: string;
}
export interface TextInputProps extends OutlinedTextFieldProps {
  value: string | number;
  onChange: (event: React.BaseSyntheticEvent) => void;
  errorText?: string;
  required?: boolean;
  Icon?: React.FC;
  multiline?: boolean;
  select?: boolean;
  onSelect?: (event: React.BaseSyntheticEvent) => void;
  options?: SelectOptions[];
  validationRegex?: RegExp;
  validationError?: string;
  [x: string]: any;
}

function CustomTextField({
  value,
  onChange,
  errorText = 'Required Field',
  required = false,
  Icon,
  multiline = false,
  select = false,
  options,
  onSelect,
  validationRegex,
  validationError = 'Invalid Field',
  ...rest
}: TextInputProps): JSX.Element {
  const [error, open, close] = useSwitch(false);
  const [errorMessage, setErrorMessage] = React.useState<string>(errorText);

  const isValid = validationRegex?.test(String(value).toLowerCase());

  React.useEffect(() => {
    if (value !== '' && isValid) close();
    if (value !== '' && !validationRegex) close();
  }, [value, close, isValid, open, validationRegex]);

  const handleOnBlur = (event: React.BaseSyntheticEvent): void => {
    if (required && event.target.value === '') open();
    else if (!validationRegex?.test(String(value).toLowerCase())) {
      setErrorMessage(validationError);
      open();
    } else {
      setErrorMessage(errorText);
      close();
    }
  };

  const classes = useStyles();
  const inputProps = {
    value,
    onChange,
    onBlur: handleOnBlur,
    error,
    helperText: error && errorMessage,
    required,
    multiline,
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

  return (
    <div className={classes.root}>
      {select ? (
        <TextField {...inputProps}>
          {options?.map(
            (option: SelectOptions): JSX.Element => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ),
          )}
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
