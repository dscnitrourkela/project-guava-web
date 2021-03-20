import React from 'react';

// Libraries
import {makeStyles, Typography} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCloudUploadAlt} from '@fortawesome/free-solid-svg-icons';

function UploadSignature({key}: {key: string}): JSX.Element {
  const classes = useStyles();

  return (
    <div key={key} className={classes.uploadContainer}>
      <Typography variant="body1" className={classes.primaryText}>
        <FontAwesomeIcon
          style={{marginRight: 10}}
          size="lg"
          icon={faCloudUploadAlt}
        />
        Upload Signature
      </Typography>
      <Typography variant="body2" className={classes.secondaryText}>
        Transparent PNGs are easier to process.
      </Typography>
    </div>
  );
}

export default UploadSignature;

const useStyles = makeStyles(theme => ({
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
}));
