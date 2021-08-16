import React, {Suspense, lazy} from 'react';

// Libraries
import {
  CssBaseline,
  useMediaQuery,
  ThemeProvider,
  makeStyles,
} from '@material-ui/core';
import {Router, Route, Switch} from 'react-router-dom';

// Components
import {MobileView, Loader, SEO} from '../components';

// Config and Utils
import Apollo from './Apollo';
import theme from './theme';
import createBrowserHistory from '../utils/createBrowserHistory';
import ROUTES from '../utils/getRoutes';

// Lazily Load all components
const HomePage = lazy(() => import('../screens/Home'));
const DashboardPage = lazy(() => import('../screens/Dashboard'));
const ComposePage = lazy(() => import('../screens/Compose'));
const ApprovePage = lazy(() => import('../screens/Approve'));
const ViewCertificatePage = lazy(() => import('../screens/ViewCertificate'));
const Playground = lazy(() => import('../screens/Demo'));
const AuthPage = lazy(() => import('../screens/Auth'));

/*
 !! Do not change order of components
*/
const RouteComponents = [
  <HomePage key={1} />,
  <AuthPage key={2} />,
  <AuthPage key={3} />,
  <ComposePage key={4} />,
  <ApprovePage key={5} />,
  <DashboardPage key={6} />,
  <ViewCertificatePage key={7} />,
  <Playground key={8} />,
];

function App(): JSX.Element {
  const isMobileView = useMediaQuery('(max-width:600px)');
  const classes = useStyles();

  return (
    <>
      <SEO />
      <Apollo>
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
                  {ROUTES.ARRAY.slice(1, ROUTES.ARRAY.length).map(
                    ({id, exact, ContextProvider, route}, index) => (
                      <Route key={id} exact={exact} path={route}>
                        {ContextProvider ? (
                          <ContextProvider>
                            {RouteComponents[index]}
                          </ContextProvider>
                        ) : (
                          RouteComponents[index]
                        )}
                      </Route>
                    ),
                  )}
                </Switch>
              )}
            </Suspense>
          </Router>
        </ThemeProvider>
      </Apollo>
    </>
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
