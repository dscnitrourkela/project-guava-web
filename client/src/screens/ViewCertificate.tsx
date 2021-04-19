import React from 'react';

// Libraries
import {makeStyles, Toolbar} from '@material-ui/core';
import {faDownload} from '@fortawesome/free-solid-svg-icons';

// Components
import {Canvas, CustomButton, ViewCertificateDetails} from '../components';

// Assets
import {DUMMY_CERTIFICATE} from '../assets/placeholder';

const ViewCertificate: React.FC = () => {
  const [certificate] = React.useState(DUMMY_CERTIFICATE);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={`${classes.flexAlign} ${classes.column1}`}>
        <Toolbar />
        <Canvas className={classes.canvas} state={certificate} isPreview />
      </div>

      <div className={`${classes.flexAlign} ${classes.column2}`}>
        <Toolbar />
        <ViewCertificateDetails />

        <CustomButton icon={faDownload} label="Download" onClick={() => {}} />

        <div className={classes.socialsContainer}>
          Instagram Facebook Twitter
        </div>
      </div>
    </div>
  );
};

export default ViewCertificate;

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    maxWidth: '100vw',
    minHeight: '100vh',
    backgroundColor: 'rgba(251, 252, 253, 1)',
    overflow: 'hidden',

    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  canvas: {
    boxShadow: '0px 10px 40px rgba(0,0,0,0.4)',
  },
  flexAlign: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  column1: {
    width: '65%',
    height: '100%',
    minHeight: '100vh',
    paddingTop: '30px',
  },
  column2: {
    width: '35%',
    height: '100%',
    minHeight: '100vh',
    alignItems: 'flex-start',
    padding: '10px',
    paddingTop: '30px',
  },
  socialsContainer: {},
}));
