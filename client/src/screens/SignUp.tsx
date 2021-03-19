import React from 'react';

// Libraries
import {Container, makeStyles} from '@material-ui/core';

// Components
import {
  HalvesTemplate,
  HalvesColumn1,
  HalvesColumn2,
  CustomTextInput,
  // CustomRadio,
  // CustomButton,
} from '../components';

// Hooks
import {useInput} from '../hooks';

// Assets
import {LOGOS} from '../assets/imgs';

const SignUp: React.FC = () => {
  const [name, setName] = useInput();

  const classes = useStyles();
  return (
    <HalvesTemplate>
      <HalvesColumn1>
        <Container className={classes.container}>
          <img src={LOGOS.ONE} alt="Logo" className={classes.logo} />
          <CustomTextInput
            value={name}
            onChange={setName}
            required
            variant="outlined"
            placeholder="Enter Your Name"
          />
        </Container>
      </HalvesColumn1>

      <HalvesColumn2>
        <CustomTextInput
          value={name}
          onChange={setName}
          required
          variant="outlined"
          placeholder="enter a number"
          // type="number"
          validationRegex={
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          }
          validationError="Invalid Email"
        />
      </HalvesColumn2>
    </HalvesTemplate>
  );
};

export default SignUp;

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logo: {
    width: '40%',
    height: 'auto',
    margin: '20px',
    marginBottom: '50px',
  },
}));
