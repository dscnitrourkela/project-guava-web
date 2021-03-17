import React from 'react';

// Libraries
import {ThemeProvider} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';

// Config
import theme from './theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <h1>Hello</h1>
    </ThemeProvider>
  );
}

export default App;
