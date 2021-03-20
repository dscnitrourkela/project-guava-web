import React, {useState} from 'react';

// Libraries
import {makeStyles, Container, Typography} from '@material-ui/core';

// Components
import {
  HalvesTemplate,
  HalvesColumn1,
  HalvesColumn2,
  Signup,
} from '../components';

// Hooks
import {useInput} from '../hooks';

// Assets
import {LOGOS, SIGNUP as SIGNUP_IMGS} from '../assets/imgs';
import {SIGNUP as SIGNUP_PLACEHOLDER} from '../assets/placeholder';

const STAGE = {
  SIGNUP: 'signup stage',
  ONBOARDING: 'onboarding stage',
  LOGIN: 'login stage',
};

const SignUp: React.FC = () => {
  const [stage, setStage] = useState<string>(STAGE.SIGNUP);

  const [name, setName] = useInput();
  const [organization, setOrganization] = useInput();
  const [designation, setDesignation] = useInput();
  const [email, setEmail] = useInput();
  const [phoneNumber, setPhoneNumber] = useInput();
  const [password, setPassword] = useInput();
  const [confirmPassword, setConfirmPassword] = useInput();

  // Set Stage Functions
  const setStageToSignup = () => setStage(STAGE.SIGNUP);
  const setStageToOnboarding = () => setStage(STAGE.ONBOARDING);
  const setStageToLogin = () => setStage(STAGE.LOGIN);

  const signupProps = {
    setStageToOnboarding,
    name,
    setName,
    organization,
    setOrganization,
    designation,
    setDesignation,
    email,
    setEmail,
    phoneNumber,
    setPhoneNumber,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
  };

  const renderStage = () => {
    switch (stage) {
      case STAGE.SIGNUP:
        return <Signup {...signupProps} />;
      default:
        return <Signup {...signupProps} />;
    }
  };

  const classes = useStyles();
  return (
    <HalvesTemplate>
      <HalvesColumn1>
        <Container className={classes.container}>
          <img src={LOGOS.ONE} alt="Logo" className={classes.logo} />

          {renderStage()}
        </Container>
      </HalvesColumn1>

      <HalvesColumn2 className={classes.column2}>
        <Typography variant="h2" className={classes.introTitle}>
          <span className={classes.highlight}>
            {SIGNUP_PLACEHOLDER.INTRO.PART1}
          </span>{' '}
          {SIGNUP_PLACEHOLDER.INTRO.PART2}{' '}
          <span className={classes.highlight}>
            {SIGNUP_PLACEHOLDER.INTRO.PART3}
          </span>{' '}
          {SIGNUP_PLACEHOLDER.INTRO.PART4}{' '}
          <span className={classes.highlight}>
            {SIGNUP_PLACEHOLDER.INTRO.PART5}
          </span>
        </Typography>

        <img
          src={SIGNUP_IMGS.INTRO}
          alt="SigNit Login"
          className={classes.image}
        />
      </HalvesColumn2>
    </HalvesTemplate>
  );
};

export default SignUp;

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    width: '40%',
    height: 'auto',
    margin: '30px',
  },
  statement: {},
  login: {
    color: theme.palette.primary.dark,
    fontWeight: 'bold',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  signup: {
    marginTop: '20px',
  },
  column2: {
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    maxWidth: '100%',
  },
  introTitle: {
    textAlign: 'center',
    width: '70%',
    height: 'auto',
    position: 'relative',
    transform: 'translate(-50%,-50%)',
    top: '80px',
    left: '50%',
    zIndex: 2,
  },
  highlight: {
    color: theme.palette.primary.dark,
    height: 'auto',
  },
  image: {
    width: '100%',
    height: 'auto',
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
  },
}));
