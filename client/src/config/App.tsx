import React from 'react';

// Libraries
import {ThemeProvider} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';
import {Router, Route, Switch} from 'react-router-dom';

// Components
import HomePage from '../screens/Home';

// Config
import theme from './theme';

// Utils
import createBrowserHistory from '../utils/createBrowserHistory';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router history={createBrowserHistory}>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
