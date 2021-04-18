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

// State Handlers
import {initialState} from '../store/action-types';

const STAGES = {
  CERTIFICATE: 'show certificate',
  RECIPIENTS: 'show recipients',
};

const recipientDetails = {
  columns: [
    {
      title: 'Sr. No.',
      field: 'srNo',
      tableData: {
        columnOrder: 0,
        groupSort: 'asc',
        width: 'calc((100% - (0px)) / 4)',
        initialWidth: 'calc((100% - (0px)) / 4)',
        additionalWidth: 0,
        id: 0,
      },
    },
    {
      title: 'Name',
      field: 'name',
      tableData: {
        columnOrder: 1,
        groupSort: 'asc',
        width: 'calc((100% - (0px)) / 4)',
        initialWidth: 'calc((100% - (0px)) / 4)',
        additionalWidth: 0,
        id: 1,
      },
    },
    {
      title: 'Email',
      field: 'email',
      tableData: {
        columnOrder: 2,
        groupSort: 'asc',
        width: 'calc((100% - (0px)) / 4)',
        initialWidth: 'calc((100% - (0px)) / 4)',
        additionalWidth: 0,
        id: 2,
      },
    },
    {
      title: 'Field',
      field: 'field',
      tableData: {
        columnOrder: 3,
        groupSort: 'asc',
        width: 'calc((100% - (0px)) / 4)',
        initialWidth: 'calc((100% - (0px)) / 4)',
        additionalWidth: 0,
        id: 3,
      },
    },
  ],
  rows: [
    {
      srNo: '1',
      name: 'ritesh',
      email: 'ritesh@gmail.com',
      field: 'eb',
      tableData: {
        id: 0,
      },
    },
    {
      srNo: '2',
      name: 'astha',
      email: 'astha@gmail.com',
      field: 'eb',
      tableData: {
        id: 1,
      },
    },
    {
      srNo: '3',
      name: 'sriram ',
      email: 'sriram@gmail.com',
      field: 'eb',
      tableData: {
        id: 2,
      },
    },
    {
      srNo: '4',
      name: 'abhibhaw ',
      email: 'abhibhaw@gmail.com',
      field: 'eb',
      tableData: {
        id: 3,
      },
    },
  ],
};

const Auth: React.FC = () => {
  const [stage, setStage] = React.useState(STAGES.CERTIFICATE);
  const [state] = React.useState({
    ...initialState,
    certificateImageDetails: {
      imageDimensions: {
        width: 788,
        height: 530,
      },
      stageDimensions: {
        width: 550,
        height: 550,
      },
      src:
        'https://res.cloudinary.com/dalqfvowk/image/upload/v1618758151/project-guava/static/kl3p9y5bd9h1u6dfnoon.png',
    },
    recipientName: {
      ...initialState.recipientName,
      position: {
        x: 409,
        y: 275,
      },
    },
    validationDetails: {
      ...initialState.validationDetails,
      position: {
        x: 177,
        y: 441,
      },
    },
    recipientDetails,
  });

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
