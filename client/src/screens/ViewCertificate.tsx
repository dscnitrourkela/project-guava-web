import React from 'react';

// Libraries
import {makeStyles, Toolbar} from '@material-ui/core';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import Konva from 'konva';

// Components
import {
  Canvas,
  CustomButton,
  ViewCertificateDetails,
  ViewCertificateHeader,
} from '../components';

// Assets + Utils
import {downloadURI} from '../utils';
import {DUMMY_CERTIFICATE} from '../assets/placeholder';

const ViewCertificate: React.FC = () => {
  const canvasRef = React.useRef<Konva.Stage>(null);
  const classes = useStyles();
  const [certificate] = React.useState(DUMMY_CERTIFICATE);

  const handleDownload = () => {
    if (canvasRef.current) {
      const uri = canvasRef.current.toDataURL();
      downloadURI(uri, 'certificate.png');
    }
  };

  return (
    <div className={classes.root}>
      <ViewCertificateHeader />
      <div className={`${classes.flexAlign} ${classes.column1}`}>
        <Toolbar />
        <Canvas
          canvasRef={canvasRef}
          className={classes.canvas}
          state={certificate}
          isPreview
        />
      </div>

      <div className={`${classes.flexAlign} ${classes.column2}`}>
        <Toolbar />
        <ViewCertificateDetails />

        <CustomButton
          iconOptions={{icon: faDownload, size: 'lg'}}
          onClick={handleDownload}
        >
          Download
        </CustomButton>

        {/* <div className={classes.socialsContainer}>
          Instagram Facebook Twitter
        </div> */}
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
    paddingTop: '70px',
  },
  column2: {
    width: '35%',
    height: '100%',
    minHeight: '100vh',
    alignItems: 'flex-start',
    padding: '10px',
    paddingTop: '70px',
  },
  socialsContainer: {},
}));
