import React from 'react';

// Libraries
import {makeStyles, Typography, Container} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';

// Components
import {CustomButton} from '../shared';

// Constants
const STAGE = {
  APPROVE: 'approve request',
  VERIFY: 'verify through mail',
  APPROVED: 'request approved',
};

function Proceed(): JSX.Element {
  const [stage, setStage] = React.useState(STAGE.APPROVE);

  // Stage Change Functions
  const setStageToApprove = () => setStage(STAGE.APPROVE);
  const setStageToVerify = () => setStage(STAGE.VERIFY);
  const setStageToApproved = () => setStage(STAGE.APPROVED);

  React.useEffect(() => {
    if (stage === STAGE.VERIFY) {
      setTimeout(setStageToApproved, 3000);
    } else if (stage === STAGE.APPROVED) {
      setTimeout(setStageToApprove, 3000);
    }
  }, [stage]);

  const classes = useStyles();

  const renderStage = () => {
    switch (stage) {
      case STAGE.APPROVE:
        return (
          <Container className={classes.approveContainer}>
            <CustomButton label="Approve" onClick={setStageToVerify} />
          </Container>
        );
      case STAGE.VERIFY:
        return (
          <Container>
            <Typography className={classes.typography} variant="body2">
              Certificates will be automatically distributed on scheduled day
              and time.
            </Typography>
          </Container>
        );
      case STAGE.APPROVED:
        return (
          <Container className={classes.approvedContainer}>
            <FontAwesomeIcon
              size="2x"
              icon={faCheckCircle}
              className={classes.approvedIcon}
            />

            <div>
              <Typography className={classes.approvedPrimary} variant="body1">
                Certificate Approved
              </Typography>
              <Typography className={classes.approvedSecondary} variant="body2">
                Approved on 10/01/2021 (16:00 IST)
              </Typography>
            </div>
          </Container>
        );
      default:
        return (
          <Container>
            <CustomButton label="Approve" onClick={setStageToApprove} />
          </Container>
        );
    }
  };
  return <div className={classes.root}>{renderStage()}</div>;
}

export default Proceed;

const useStyles = makeStyles(theme => ({
  root: {
    width: '30%',
    height: 70,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '10px',
    position: 'fixed',
    bottom: '0px',
    backgroundColor: '#ffffff',
    borderTop: '1px solid rgba(0,0,0,0.23)',
    zIndex: 100,
  },
  approveContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  typography: {
    color: 'rgba(0,0,0,0.23)',
    lineHeight: '1rem',
  },
  approvedContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  approvedIcon: {
    // @ts-ignore
    color: theme.palette.accent.green,
    marginRight: 10,
  },
  approvedPrimary: {
    fontWeight: 'bold',
  },
  approvedSecondary: {},
}));
