import React from 'react';

// Components
import {
  CustomTextInput,
  CustomRadio,
  CustomDateTime,
  CustomCounter,
} from '../components';

// Hooks
import {useInput, useCounter} from '../hooks';

function Home(): JSX.Element {
  const [value, setValue] = useInput('');
  const [radio, setRadio] = useInput();
  const [date, setDate] = React.useState<Date | null>(new Date(Date.now()));
  const [time, setTime] = React.useState<Date | null>(new Date(Date.now()));
  const [counter, increment, decrement, setCounter] = useCounter(0);

  return (
    <div>
      <h1>Hello</h1>

      <CustomTextInput
        value={value}
        onChange={setValue}
        required
        variant="outlined"
        placeholder="enter a number"
        // type="number"
        validationRegex={
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        }
        validationError="Invalid Email"
      />

      <CustomRadio
        value={radio}
        onChange={setRadio}
        options={[
          {value: 'female', label: 'Female'},
          {value: 'male', label: 'Male'},
          {value: 'other', label: 'Other'},
        ]}
        name="gender"
        ariaLabel="gender"
      />

      <CustomDateTime
        selectedDate={date}
        onChange={(e: Date | null): void => setDate(e)}
        type="date"
      />

      <CustomDateTime
        selectedDate={time}
        onChange={(e: Date | null): void => setTime(e)}
        type="time"
      />

      <CustomCounter
        value={counter}
        onChange={setCounter}
        increment={increment}
        decrement={decrement}
      />
    </div>
  );
}

export default Home;
