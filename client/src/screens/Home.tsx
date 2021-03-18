import React from 'react';

// Components
import {CustomTextInput, CustomRadio} from '../components';

// Hooks
import {useInput} from '../hooks';

function Home(): JSX.Element {
  const [value, setValue] = useInput('');
  const [radio, setRadio] = useInput();

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
    </div>
  );
}

export default Home;
