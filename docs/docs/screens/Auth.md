---
sidebar_position: 2
---

# Authentication Page

- This single page is responsible for both Login and Registration of users.
- It follows a stage structure where Login and Signup are the 2 stages
- Depending upon the url (route), one of the 2 stages is displayed

## Local States

- This parent level component handles all the states required for authentication locally.
- Two main types of state present are:

### Stage

```diff title="Auth.tsx"
const STAGE = {
  SIGNUP: 'signup stage',
  ONBOARDING: 'onboarding stage',
  LOGIN: 'login stage',
};

const isSignupStage = window.location.pathname.split('/')[1] === 'signup';
const [stage, setStage] = useState<string>(
  isSignupStage ? STAGE.SIGNUP : STAGE.LOGIN,
);
```

- `window.location.pathname` provides the current route which the user is on.
- Using the split method on the string to get an array of the words used in the route and then verifying if the route is signup.
- Depending upon the isSignupStage boolean, the initial state of the stage is set as per the STAGE Object.

### Data States

```diff title="Auth.tsx"
const [name, setName] = useInput();
```

- A custom hook: useInput is used to create the states for all sorts of data used in the components.
- Following states are create: name, organization, designation, email, phoneNumber, password, confirmPassword, signatureType, imageUrl.

## Methods

### Stage Update Methods.

```diff title="Auth.tsx"
const setStageToSignup = () => setStage(STAGE.SIGNUP);
const setStageToOnboarding = () => setStage(STAGE.ONBOARDING);
const setStageToLogin = () => setStage(STAGE.LOGIN)
```

Handy little functions to instantly update the stages.

### Render Stage.

```diff title="Auth.tsx"
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
```

Depending upon the stage state variable, the login, signup, onboarding components are rendered.
