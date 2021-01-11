import React from 'react';
import Home from './Home';
import Authenticate from '../components/Authenticate/Authenticate';

// Libraries
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

// Components
import ActivityIndicator from '../components/shared/ActivityIndicator';

// Helpers
import createBrowserHistory from '../helpers/history';

// Asynchronous Loading of Pages in different chunks
const AsyncHome = Loadable({
  loader: () => import('./Home'),
  loading: ActivityIndicator,
});
const AsyncAuthenticate = Loadable({
  loader: () => import('../components/Authenticate/Authenticate'),
  loading: ActivityIndicator,
});
const AsyncDashboard = Loadable({
  loader: () => import('./Dashboard'),
  loading: ActivityIndicator,
});
const AsyncCreateBatch = Loadable({
  loader: () => import('./CreateBatch.js'),
  loading: ActivityIndicator,
});
// Function to check the Authenticated status.
const isAuthenticated = () => {
  // Check the authentication state as per your way of authentication i.e. jwt, sessions, etc
};

// Use this Route component for authenticated Routes.
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (isAuthenticated() ? <Component {...props} /> : <Redirect to='/login' />)}
  />
);

function App() {
  return (
    <Router history={createBrowserHistory}>
      {/* <Switch> */}
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/Authenticate' exact component={Authenticate} />
      {/* </Switch> */}
    </Router>
  );
}

export default App;
