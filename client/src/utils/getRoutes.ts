import {ComposeProvider} from '../store/contexts';
// filePath property is the path to the file relative to the App.tsx file

export interface RouteType {
  name: string;
  longName: string;
  route: string;
  filePath: string;
  id: string;
  ContextProvider: any;
  exact: boolean;
  path?: () => Promise<{default: () => Element}>;
}

const ARRAY = [
  {
    name: 'MobileView',
    longName: 'MOBILE_VIEW',
    route: '*',
    filePath: '../components/widgets/MobileView',
    id: '2',
    ContextProvider: null,
    exact: true,
    path: import('../components/widgets/MobileView'),
  },
  {
    name: 'Home',
    longName: 'HOME',
    route: '/',
    filePath: '../screens/Home',
    id: '1',
    ContextProvider: null,
    exact: true,
    path: import('../screens/Home'),
  },
  {
    name: 'Sign Up',
    longName: 'SIGN_UP',
    route: '/signup',
    filePath: '../screens/Auth',
    id: '3',
    ContextProvider: null,
    exact: true,
    path: () => import('../screens/Home'),
  },
  {
    name: 'Login',
    longName: 'LOGIN',
    route: '/login',
    filePath: '../screens/Auth',
    id: '4',
    ContextProvider: null,
    exact: true,
    path: () => import('../screens/Home'),
  },
  {
    name: 'Compose',
    longName: 'COMPOSE',
    route: '/compose',
    filePath: '../screens/Home.tsx',
    id: '5',
    ContextProvider: ComposeProvider,
    exact: true,
    path: () => import('../screens/Home'),
  },
  {
    name: 'Approve',
    longName: 'APPROVE',
    route: '/approve',
    filePath: '../screens/Approve',
    id: '6',
    ContextProvider: null,
    exact: true,
    path: () => import('../screens/Home'),
  },
  {
    name: 'Dashboard',
    longName: 'DASHBOARD',
    route: '/dashboard',
    filePath: '../screens/Dashboard',
    id: '7',
    ContextProvider: null,
    exact: true,
    path: () => import('../screens/Home'),
  },
  {
    name: 'View Certificate',
    longName: 'VIEW_CERTIFICATE',
    route: '/viewCertificate',
    filePath: '../screens/ViewCertificate',
    id: '8',
    ContextProvider: null,
    exact: true,
    path: () => import('../screens/Home'),
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
