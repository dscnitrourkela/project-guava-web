import {createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: '#398FFE',
      dark: '#1359B5',
    },
    secondary: {
      main: 'rgba(0, 0, 0, 0.6)',
      light: 'rgba(0, 0, 0, 0.12)',
      dark: 'rgba(0, 0, 0, 0.8)',
    },
    // @ts-ignore
    accent: {
      red: '#F64A4B',
      green: '#00AE40',
      yellow: '#DE8500',
    },
    common: {
      black: '#000000',
      white: '#ffffff',
    },
    grey: {
      100: '#F2F2F2',
      200: '#D8D8D8',
      300: '#9F9F9F',
      400: '#737273',
      500: '#787678',
      600: '#5E5D5E',
      700: '#464546',
      800: '#2E2D2E',
      900: '#141414',
    },
    text: {
      primary: 'rgba(0, 0, 0, 1)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.4)',
      hint: 'rgba(0, 0, 0, 0.4)',
    },
    divider: 'rgba(0, 0, 0, 0.2)',
    background: {
      default: '#FFF',
      paper: '#F6F6F6',
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.4)',
      hoverOpacity: 0.04,
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledOpacity: 0.12,
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      activatedOpacity: 0.12,
    },
  },
  typography: {
    // Global Font Styles
    fontFamily: [
      'Inter',
      'Roboto',
      'Helvetica',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    // Individual Font Styles for each element
    h1: {
      fontFamily: '"Inter" ,"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: '2rem',
      lineHeight: '3rem',
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
        lineHeight: '2rem',
      },
    },
    h2: {
      fontFamily: '"Inter" ,"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: '1.5rem',
      lineHeight: '2rem',
      '@media (max-width:600px)': {
        fontSize: '1.25rem',
        lineHeight: '1.75rem',
      },
    },
    h3: {
      fontFamily: '"Inter" ,"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: '1.375rem',
      lineHeight: '1.75rem',
      '@media (max-width:600px)': {
        fontSize: '1.125rem',
        lineHeight: '1.5rem',
      },
    },
    h4: {
      fontFamily: '"Inter" ,"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: '1.375rem',
      '@media (max-width:600px)': {
        fontSize: '1.125rem',
        lineHeight: '1.5rem',
      },
    },
    // Regular Body
    body1: {
      fontFamily: '"Inter" ,"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: '1.75rem',
      '@media (max-width:600px)': {
        fontSize: '0.8rem',
        lineHeight: '1.5rem',
      },
    },
    // MetaData
    body2: {
      fontFamily: '"Inter" ,"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: '1.25rem',
    },
  },
  zIndex: {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  // spacing: [0, 4, 8, 16, 32, 64],
});

export default theme;
