import React from 'react';

// Libraries
import { makeStyles, Toolbar } from '@material-ui/core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Konva from 'konva';
import { useHistory } from "react-router-dom";

// Components
import {
  Canvas,
  CustomButton,
  ViewCertificateDetails,
  ViewCertificateHeader,
} from '../components';

// Assets + Utils
import { downloadURI } from '../utils';
import { DUMMY_CERTIFICATE } from '../assets/placeholder';

const ViewCertificate: React.FC = () => {
  const canvasRef = React.useRef<Konva.Stage>(null);
  const classes = useStyles();
  const history = useHistory<{
    name: string;
    email: string;
    certificateId: string;
    teamName: string;
    tag: string;
    prize?: string;
  }>();

  const [certificate] = React.useState({
    certificateDetails: {
      title: '',
      eventName: '',
      date: null,
      time: null,
    },
    certificateImageDetails: {
      imageDimensions: {
        height: 612,
        width: 792,
      },
      stageDimensions: {
        width: 550,
        height: 550,
      },
      src: history.location.state.tag === "Appreciation"
        ? 'https://res.cloudinary.com/riteshp2000/image/upload/v1642250889/Appreciation_Certificate_ztv1oo.png'
        : 'https://res.cloudinary.com/riteshp2000/image/upload/v1642091542/Particpation_Certificate_1_tbj63v.png'
    },
    recipientName: {
      scale: { x: 1, y: 1 },
      dimensions: { width: 400, height: 50 },
      name: history?.location?.state?.name,
      id: 'recipient-name-id',
      position: {
        x: 350,
        y: 255,
      },
    },
    validationDetails: {
      scale: { x: 1, y: 1 },
      dimensions: { width: 200, height: 50 },
      name: history?.location?.state?.teamName,
      id: 'recipient-team-name-id',
      position: {
        x: history.location.state.tag === "Appreciation" ? 430 : 490,
        y: history.location.state.tag === "Appreciation" ? 350 : 327,
      }
    },
    authorizerDetails: [],
    recipientDetails: { columns: [], rows: [] },
  });

  const [details] = React.useState(() => {
    if (history.location.state) {
      // @ts-ignore
      const { certificateId } = history.location.state;
      return [
        {
          key: 'CertificateId',
          value: certificateId,
        },
        {
          key: 'Event Name',
          value: 'HackNITR 3.0',
        },
        {
          key: 'Distribution Date',
          value: '15th January 2022',
        },
        {
          key: 'Signee(s)',
          value: 'Astha Nayak',
        },
        {
          key: ' ',
          value: 'Ritesh Patil',
        },
      ]
    }
    return null;
  })

  const handleDownload = () => {
    if (canvasRef.current) {
      const uri = canvasRef.current.toDataURL();
      downloadURI(uri, 'hacknitr3_certificate.png');
    }
  };

  return (
    <div className={classes.root}>
      <ViewCertificateHeader email={history?.location?.state?.email} />
      <div className={`${classes.flexAlign} ${classes.column1}`}>
        <Toolbar />
        <Canvas
          canvasRef={canvasRef}
          className={classes.canvas}
          state={certificate}
          extraValue={history?.location?.state?.prize ? {
            scale: { x: 1, y: 1 },
            dimensions: { width: 400, height: 50 },
            name: history?.location?.state?.prize,
            id: 'recipient-name-id',
            position: {
              x: 325,
              y: 315,
            },
          } : undefined}
          isPreview
        />
      </div>

      <div className={`${classes.flexAlign} ${classes.column2}`}>
        <Toolbar />
        <ViewCertificateDetails details={details} />

        <CustomButton
          iconOptions={{ icon: faDownload, size: 'lg' }}
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
