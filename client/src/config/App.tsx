import React, {Suspense, lazy} from 'react';

// Libraries
import {
  CssBaseline,
  useMediaQuery,
  ThemeProvider,
  makeStyles,
} from '@material-ui/core';
import {Router, Route, Switch, Redirect} from 'react-router-dom';

// Context Providers
import {ComposeProvider} from '../store/contexts';

// Components
import {MobileView, Loader} from '../components';

// Config and Utils
import theme from './theme';
import createBrowserHistory from '../utils/createBrowserHistory';

// Lazily Load all components
const HomePage = lazy(() => import('../screens/Home'));
const DashboardPage = lazy(() => import('../screens/Dashboard'));
const ComposePage = lazy(() => import('../screens/Compose'));
const ApprovePage = lazy(() => import('../screens/Approve'));
const ViewCertificatePage = lazy(() => import('../screens/ViewCertificate'));
const DemoPage = lazy(() => import('../screens/Demo'));
const AuthPage = lazy(() => import('../screens/Auth'));

function App(): JSX.Element {
  const isMobileView = useMediaQuery('(max-width:600px)');
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router history={createBrowserHistory}>
        <Suspense
          fallback={
            <div className={classes.divContainer}>
              <Loader />
            </div>
          }
        >
          {isMobileView ? (
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="*" component={MobileView} />
            </Switch>
          ) : (
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/demo" component={DemoPage} />

              <Route exact path="/signup" component={AuthPage} />
              <Route exact path="/login" component={AuthPage} />

              <Route exact path="/compose">
                <ComposeProvider>
                  <ComposePage />
                </ComposeProvider>
              </Route>

              <Route exact path="/approve">
                <ApprovePage />
              </Route>

              <Route exact path="/dashboard">
                <DashboardPage />
              </Route>

              <Route exact path="/viewCertificate">
                <ViewCertificatePage />
              </Route>
            </Switch>
          )}
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;

const useStyles = makeStyles(() => ({
  divContainer: {
    width: '100vw',
    minHeight: '100vh',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
