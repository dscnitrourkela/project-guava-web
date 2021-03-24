import React from 'react';

// Libraries
import {makeStyles, Container, Typography, Radio} from '@material-ui/core';

// Components
import {CustomButton, CustomCounter} from '../shared';

// Hooks
import {useCounter, useInput} from '../../hooks';

function RecipientsImport(): JSX.Element {
  const [counter, increment, decrement, setCounter] = useCounter(0);
  const [radio, setRadio] = useInput();

  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="body1" className={classes.typography}>
        No. of Certificates:{' '}
      </Typography>
      <CustomCounter
        value={counter}
        onChange={setCounter}
        increment={increment}
        decrement={decrement}
      />
      <CustomButton
        label="Add Recipients"
        // eslint-disable-next-line
        onClick={() => console.log('Logged')}
      />

      <div className={classes.radioContainer}>
        <Typography variant="body1" className={classes.typography}>
          Sign Colour:{' '}
        </Typography>

        <Radio
          checked={radio === 'black'}
          onChange={setRadio}
          value="black"
          name="Sign Colour"
          inputProps={{'aria-label': 'sign-colour-black'}}
          size="small"
          style={{color: 'black'}}
          classes={{root: classes.radio}}
        />

        <Radio
          checked={radio === 'white'}
          onChange={setRadio}
          value="white"
          name="Sign Colour"
          inputProps={{'aria-label': 'sign-colour-white'}}
          size="small"
          style={{color: 'white'}}
          classes={{root: classes.radio}}
        />
      </div>
    </Container>
  );
}

export default RecipientsImport;

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '15px auto',
  },
  typography: {
    marginRight: '10px',
  },
  radioContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radio: {
    padding: '0px',
    margin: '5px',
    marginRight: '10px',
  },
}));
