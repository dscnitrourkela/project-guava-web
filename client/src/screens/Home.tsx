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
        select
        value={value}
        onChange={setValue}
        onSelect={setValue}
        required
        options={[
          {value: 1, label: 'one'},
          {value: 2, label: 'two'},
          {value: 3, label: 'three'},
        ]}
      />
    </div>
  );
}

export default Home;
