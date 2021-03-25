import React from 'react';

// Libraries
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClock} from '@fortawesome/free-solid-svg-icons';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export interface CustomDateTime {
  selectedDate: Date | null;
  onChange: (date: Date | null) => void;
  type: 'date' | 'time';
  label?: string;
  disablePast?: boolean;
}

export default function MaterialUIPickers({
  selectedDate,
  onChange,
  type,
  label,
  disablePast = false,
}: CustomDateTime): JSX.Element {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <>
        {type === 'date' && (
          <KeyboardDatePicker
            variant="inline"
            inputVariant="outlined"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker"
            label={label}
            value={selectedDate}
            onChange={onChange}
            disablePast={disablePast}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        )}

        {type === 'time' && (
          <KeyboardTimePicker
            variant="inline"
            inputVariant="outlined"
            margin="normal"
            id="time-picker"
            label={label}
            value={selectedDate}
            onChange={onChange}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
            keyboardIcon={<FontAwesomeIcon size="sm" icon={faClock} />}
          />
        )}
      </>
    </MuiPickersUtilsProvider>
  );
}
