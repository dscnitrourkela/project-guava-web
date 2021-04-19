import React from 'react';

// Libraries
import {makeStyles} from '@material-ui/core';

// Components
import {
  HalvesTemplate,
  HalvesColumn1,
  HalvesColumn2,
  DetailsMenu,
  RequestDetails,
  ApprovalProceed,
  Certificate,
  ViewMenu,
  RecipientsTable,
} from '../components';

// Assets
import {DUMMY_CERTIFICATE} from '../assets/placeholder';

const STAGES = {
  CERTIFICATE: 'show certificate',
  RECIPIENTS: 'show recipients',
};

const Auth: React.FC = () => {
  const [stage, setStage] = React.useState(STAGES.CERTIFICATE);
  const [state] = React.useState(DUMMY_CERTIFICATE);

  // Stage Change Functions
  const setStageToCertificate = () => setStage(STAGES.CERTIFICATE);
  const setStageToRecipients = () => setStage(STAGES.RECIPIENTS);

  const classes = useStyles();
  return (
    <HalvesTemplate>
      <HalvesColumn1>
        <DetailsMenu />
        <RequestDetails />
        <ApprovalProceed />
      </HalvesColumn1>

      <HalvesColumn2 className={classes.column2}>
        <ViewMenu
          stage={stage}
          stages={STAGES}
          setStageToCertificate={setStageToCertificate}
          setStageToRecipients={setStageToRecipients}
        />
        {stage === STAGES.CERTIFICATE && <Certificate state={state} />}
        {stage === STAGES.RECIPIENTS && (
          <RecipientsTable
            rows={state.recipientDetails.rows}
            columns={state.recipientDetails.columns}
          />
        )}
      </HalvesColumn2>
    </HalvesTemplate>
  );
};

export default Auth;

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  column2: {
    position: 'relative',
    maxWidth: '100%',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
}));
