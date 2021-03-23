import React from 'react';

// Libraries
import {
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
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorText?: string;
  required?: boolean;
  Icon?: React.FC;
  multiline?: boolean;
  select?: boolean;
  onSelect?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  options?: SelectOptions[];
  validationRegex?: RegExp;
  validationError?: string;
  className?: string;
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
  className,
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

  const inputProps = {
    value,
    onChange,
    onBlur: handleOnBlur,
    error,
    helperText: error && errorMessage,
    required,
    multiline,
    rows: 4,
    fullWidth: true,
    select,
    style: className ? {} : {margin: '10px'},
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
    <>
      {select ? (
        <TextField className={className} {...inputProps}>
          {options?.map(
            (option: SelectOptions): JSX.Element => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ),
          )}
        </TextField>
      ) : (
        <TextField className={className} {...inputProps} />
      )}
    </>
  );
}

export default CustomTextField;
