import React from 'react';

// Components
import {
  CustomTextInput,
  CustomRadio,
  CustomDateTime,
  CustomCounter,
  CustomButton,
  CustomModal,
} from '../components';

// Hooks
import {useInput, useCounter, useToggle} from '../hooks';

function Home(): JSX.Element {
  const [value, setValue] = useInput('');
  const [radio, setRadio] = useInput();
  const [date, setDate] = React.useState<Date | null>(new Date(Date.now()));
  const [time, setTime] = React.useState<Date | null>(new Date(Date.now()));
  const [counter, increment, decrement, setCounter] = useCounter(0);
  // eslint-disable-next-line
  const [loading, toggleLoading, setLoading] = useToggle(false);
  // eslint-disable-next-line
  const [open, toggleOpen, setOpen] = useToggle(false);

  React.useEffect(() => {
    if (loading) {
      setTimeout(() => setLoading(false), 2000);
    }
  }, [loading, setLoading]);

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

      <CustomButton
        label="Custom Label"
        // eslint-disable-next-line
        onClick={() => console.log('Logged')}
        loading={loading}
        setLoading={setLoading}
      />
      <button
        type="button"
        // @ts-ignore
        onClick={() => setOpen((current: boolean): void => !current)}
      >
        Open
      </button>
      <CustomModal
        open={open}
        setOpen={setOpen}
        content={
          <div
            style={{minWidth: 500, minHeight: 300, backgroundColor: '#ffffff'}}
          >
            <h1>Hello</h1>
          </div>
        }
      />
    </div>
  );
}

export default Home;
