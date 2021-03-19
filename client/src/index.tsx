import React from 'react';
import ReactDOM from 'react-dom';

import Root from './config/Root';
import App from './config/App';

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.querySelector('#root'),
);
