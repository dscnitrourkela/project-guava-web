import React from 'react';

// Libraries
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClock} from '@fortawesome/free-solid-svg-icons';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
  KeyboardDatePickerProps,
  // KeyboardTimePickerProps,
} from '@material-ui/pickers';

export interface CustomDateTimeProps extends KeyboardDatePickerProps {
  type: 'date' | 'time';
}

const CustomDateTimePicker: React.FC<CustomDateTimeProps> = ({
  value,
  onChange,
  type,
  variant = 'inline',
  inputVariant = 'outlined',
  format = 'MM/dd/yyyy',
  margin = 'normal',
  id = 'date-picker',
  ...rest
}) => {
  const keyboardProps = {
    value,
    onChange,
    inputVariant,
    variant,
    format,
    margin,
    id,
    ...rest,
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      {type === 'date' && <KeyboardDatePicker {...keyboardProps} />}

      {type === 'time' && (
        // @ts-ignore
        <KeyboardTimePicker
          keyboardIcon={<FontAwesomeIcon size="sm" icon={faClock} />}
          {...keyboardProps}
        />
      )}
    </MuiPickersUtilsProvider>
  );
};

export default CustomDateTimePicker;
