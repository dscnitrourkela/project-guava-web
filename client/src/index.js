import React from 'react';
import ReactDOM from 'react-dom';

import App from './views/App';
import Root from './Root';

ReactDOM.render(
  <Root>
    <App style={{ backgroundColor: '#d4d4d4' }} />
  </Root>,
  document.querySelector('#root'),
);
