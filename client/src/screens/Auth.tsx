import React, {useState} from 'react';

// Libraries
import {makeStyles, Container, Typography} from '@material-ui/core';

// Components
import {
  HalvesTemplate,
  HalvesColumn1,
  HalvesColumn2,
  Signup,
  Onboarding,
  Login,
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

const Auth: React.FC = () => {
  const isSignupStage = window.location.pathname.split('/')[1] === 'signup';
  const [stage, setStage] = useState<string>(
    isSignupStage ? STAGE.SIGNUP : STAGE.LOGIN,
  );

  // Signup and Login States
  const [name, setName] = useInput();
  const [organization, setOrganization] = useInput();
  const [designation, setDesignation] = useInput();
  const [email, setEmail] = useInput();
  const [phoneNumber, setPhoneNumber] = useInput();
  const [password, setPassword] = useInput();
  const [confirmPassword, setConfirmPassword] = useInput();

  // Onboarding States
  const [signatureType, setSignatureType] = useInput();
  // eslint-disable-next-line
  const [imageUrl, setImageUrl] = useState<string | undefined>();

  // Set Stage Functions
  const setStageToSignup = () => setStage(STAGE.SIGNUP);
  const setStageToOnboarding = () => setStage(STAGE.ONBOARDING);
  const setStageToLogin = () => setStage(STAGE.LOGIN);

  const signupProps = {
    setStageToOnboarding,
    setStageToLogin,
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

  const onboardingProps = {
    setStageToSignup,
    signatureType,
    setSignatureType,
    setImageUrl,
  };

  const loginProps = {
    setStageToSignup,
    email,
    setEmail,
    password,
    setPassword,
  };

  const renderStage = () => {
    switch (stage) {
      case STAGE.SIGNUP:
        return <Signup {...signupProps} />;
      case STAGE.ONBOARDING:
        return <Onboarding {...onboardingProps} />;
      case STAGE.LOGIN:
        return <Login {...loginProps} />;
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

export default Auth;

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logo: {
    width: '40%',
    height: 'auto',
    margin: '30px',
  },
  column2: {
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
