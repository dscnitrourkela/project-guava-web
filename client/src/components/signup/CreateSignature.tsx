import React from 'react';

// Libraries
import {makeStyles, Typography} from '@material-ui/core';

// Components
import {CustomTextInput} from '../shared';

// Hooks
import {useInput} from '../../hooks';

function UploadSignature(): JSX.Element {
  const [signature, setSignature] = useInput();

  const classes = useStyles();
  return (
    <div className={classes.creatContainer}>
      <CustomTextInput
        value={signature}
        onChange={setSignature}
        required
        variant="outlined"
        label="Name on Signature"
      />
      <Typography className={classes.signatureOutput}>{signature}</Typography>
    </div>
  );
}

export default UploadSignature;

const useStyles = makeStyles(theme => ({
  creatContainer: {
    minHeight: '150px',
    backgroundColor: theme.palette.background.paper,
    borderRadius: 6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '10px',
  },
  signatureOutput: {
    fontFamily: "'Mr Dafoe', cursive",
    fontSize: '40px',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10px',
    width: '100%',
    borderRadius: '4px',
    border: '1px solid rgba(0,0,0, 0.23)',
  },
}));
