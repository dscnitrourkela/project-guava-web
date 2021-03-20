import React from 'react';

// Libraries
import {makeStyles, Typography} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faCloudUploadAlt,
} from '@fortawesome/free-solid-svg-icons';

// Componenets
import {CustomRadio, CustomButton} from '../shared';
import UploadSignature from './UploadSignature';

export interface SignUpProps {
  setStageToSignup: () => void;
  setImageUrl: (event: string | undefined) => void;
  signatureType: string | number;
  setSignatureType: (event: React.BaseSyntheticEvent) => void;
}

function FirstStage({
  setStageToSignup,
  // eslint-disable-next-line
  setImageUrl,
  signatureType,
  setSignatureType,
}: SignUpProps): JSX.Element {
  const handleClick = () => {};

  const classes = useStyles();
  const radioSelectedShowcase = [
    <UploadSignature key="Upload Signature" />,
    <div key="Create Signature" className={classes.createContainer}>
      <Typography variant="h3">Create Signature</Typography>
      <Typography variant="h3">
        Transparent PNGs are easier to process.
      </Typography>
    </div>,
  ];

  return (
    <>
      <div className={classes.titleContainer}>
        <FontAwesomeIcon
          className={classes.icon}
          size="lg"
          icon={faChevronLeft}
          onClick={setStageToSignup}
        />
        <Typography variant="body1" className={classes.title}>
          Add Signature
        </Typography>
      </div>

      <CustomRadio
        value={signatureType}
        onChange={setSignatureType}
        options={[
          {value: 'Upload Signature', label: 'Upload Signature'},
          {value: 'Create Signit Signature', label: 'Create Signit Signature'},
        ]}
        name="Upload Signature"
        className={classes.radio}
        selectedChildElement={radioSelectedShowcase}
      />

      <CustomButton
        className={classes.signup}
        label="Sign up"
        onClick={handleClick}
      />
    </>
  );
}

export default FirstStage;

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signup: {
    marginTop: '20px',
  },
  titleContainer: {
    position: 'relative',
    width: '100%',
    marginBottom: '30px',
  },
  icon: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    left: 15,
  },
  radio: {
    marginBottom: '30px',
  },
  uploadContainer: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: 6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    minHeight: '150px',
  },
  primaryText: {
    color: theme.palette.primary.main,
  },
  secondaryText: {
    position: 'absolute',
    bottom: 10,
  },
  createContainer: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: 6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '150px',
  },
}));
