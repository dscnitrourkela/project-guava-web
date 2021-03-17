import React from 'react';

// Components
import {CustomTextInput} from '../components';

// Hooks
import {useInput} from '../hooks';

function Home(): JSX.Element {
  const [value, setValue] = useInput('');

  console.log(value);

  return (
    <div>
      <h1>Hello</h1>

      {/* <TextField
        value={input}
        onChange={e => {
          console.log(e);
          setInput(e.target.value);
        }}
        onBlur={e => console.log(e.target.value === '')}
      /> */}

      <CustomTextInput value={value} onChange={setValue} />
    </div>
  );
}

export default Home;
