import {ComposeProvider} from '../store/contexts';

export interface RouteType {
  name: string;
  longName: string;
  route: string;
  id: string;
  ContextProvider: any;
  exact: boolean;
}

const ARRAY = [
  {
    name: 'MobileView',
    longName: 'MOBILE_VIEW',
    route: '*',
    id: '2',
    ContextProvider: null,
    exact: true,
  },
  {
    name: 'Home',
    longName: 'HOME',
    route: '/',
    id: '1',
    ContextProvider: null,
    exact: true,
  },
  {
    name: 'Sign Up',
    longName: 'SIGN_UP',
    route: '/signup',
    id: '3',
    ContextProvider: null,
    exact: true,
  },
  {
    name: 'Login',
    longName: 'LOGIN',
    route: '/login',
    id: '4',
    ContextProvider: null,
    exact: true,
  },
  {
    name: 'Compose',
    longName: 'COMPOSE',
    route: '/compose',
    id: '5',
    ContextProvider: ComposeProvider,
    exact: true,
  },
  {
    name: 'Approve',
    longName: 'APPROVE',
    route: '/approve',
    id: '6',
    ContextProvider: null,
    exact: true,
  },
  {
    name: 'Dashboard',
    longName: 'DASHBOARD',
    route: '/dashboard',
    id: '7',
    ContextProvider: null,
    exact: true,
  },
  {
    name: 'View Certificate',
    longName: 'VIEW_CERTIFICATE',
    route: '/viewCertificate',
    id: '8',
    ContextProvider: null,
    exact: true,
  },
  {
    name: 'Playground',
    longName: 'PLAYGROUND',
    route: '/playground',
    id: '9',
    ContextProvider: null,
    exact: true,
  },
];

const OBJECT: {[x: string]: RouteType} = {};
ARRAY.forEach(route => {
  // @ts-ignore
  OBJECT[route.longName] = route;
});

export default Object.freeze({
  ARRAY,
  OBJECT,
});
