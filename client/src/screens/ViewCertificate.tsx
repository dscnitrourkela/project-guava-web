import React from 'react';

// Libraries
import {makeStyles, Toolbar, Typography} from '@material-ui/core';

// Components
import {Canvas, CustomButton} from '../components';

// Assets
import {DUMMY_CERTIFICATE} from '../assets/placeholder';

const DUMMY = [
  {
    key: 'Certificate ID',
    value: '119id0690',
  },
  {
    key: 'Event Name',
    value: 'Innovision',
  },
  {
    key: 'Distribution Date',
    value: '05/02/2021',
  },
  {
    key: 'Signee(s)',
    value: 'Prof. Karan Kapoor',
  },
  {
    key: ' ',
    value: 'Prof. Random Sharma',
  },
];

const ViewCertificate: React.FC = () => {
  const [certificate] = React.useState(DUMMY_CERTIFICATE);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.column1}>
        <Toolbar />
        <Canvas className={classes.canvas} state={certificate} isPreview />
      </div>

      <div className={classes.column2}>
        <Toolbar />
        <div className={classes.certificateDetails}>
          {DUMMY.map(detail => (
            <Typography
              key={detail.value}
              variant="body1"
              className={classes.detailValue}
            >
              <span className={classes.detailKey}>{detail.key}</span>:
              {detail.value}
            </Typography>
          ))}
        </div>

        <CustomButton label="Download" onClick={() => {}} />

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
  column1: {
    width: '65%',
    height: '100%',
    minHeight: '100vh',

    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',

    paddingTop: '30px',
  },
  column2: {
    width: '35%',
    height: '100%',
    minHeight: '100vh',

    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',

    padding: '10px',
    paddingTop: '30px',
  },
  certificateDetails: {
    width: '100%',
    marginBottom: '30px',
  },
  detailValue: {
    fontWeight: 'bold',
    lineHeight: 2,
    margin: '10px auto',
  },
  detailKey: {
    fontWeight: 'normal',
    color: 'rgba(0, 0, 0, 0.6);',
    display: 'inline-block',
    width: '150px !important',
  },
  socialsContainer: {},
}));
