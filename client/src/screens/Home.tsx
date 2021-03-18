import React from 'react';

// Components
import {CustomTextInput} from '../components';

// Hooks
import {useInput} from '../hooks';

function Home(): JSX.Element {
  const [value, setValue] = useInput('');

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
    </div>
  );
}

export default Home;
