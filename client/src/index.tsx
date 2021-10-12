import React from 'react';
import ReactDOM from 'react-dom';
import {Auth0Provider} from '@auth0/auth0-react';

import App from './config/App';
import './index.css';

ReactDOM.render(
  <Auth0Provider
    domain="signit.eu.auth0.com"
    clientId="C4gXGmb9XUSz1Ll0XxenNkrLcJvti3qc"
    redirectUri={window.location.origin}
    audience="https://signit-api.dscnitrourkela.org/"
  >
    <App />
  </Auth0Provider>,
  document.querySelector('#root'),
);
