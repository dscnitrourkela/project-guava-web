import React from 'react';

// Libraries
import {makeStyles, Typography} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUsers, faCertificate} from '@fortawesome/free-solid-svg-icons';

// State Handlers
// import {useCompose} from '../../store/contexts';
// import {COMPOSE} from '../../store/action-types';

interface Props {
  stage: string;
  stages: any;
  setStageToRecipients: () => void;
  setStageToCertificate: () => void;
}

const EditorMenu: React.FC<Props> = ({
  stages,
  stage,
  setStageToCertificate,
  setStageToRecipients,
}) => {
  // const [, dispatch] = useCompose();
  const isStageCertficate = stage === stages.CERTIFICATE;
  const classes = useStyles(isStageCertficate);

  return (
    <div className={classes.root}>
      {stage === stages.CERTIFICATE ? (
        <Typography
          variant="body1"
          className={classes.previewText}
          onClick={setStageToRecipients}
        >
          Recipients List
          <FontAwesomeIcon
            className={classes.preview}
            size="lg"
            icon={faUsers}
          />
        </Typography>
      ) : (
        <Typography
          variant="body1"
          className={classes.previewText}
          onClick={setStageToCertificate}
        >
          <FontAwesomeIcon
            className={classes.preview}
            size="lg"
            icon={faCertificate}
            style={{marginRight: 10}}
          />
          Certificate
        </Typography>
      )}
    </div>
  );
};

export default EditorMenu;

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '70px',
    display: 'flex',
    alignItem: 'center',
    // @ts-ignore
    justifyContent: isStageCertficate =>
      isStageCertficate ? 'flex-end' : 'flex-start',
    borderBottom: 'rgba(0,0,0,0.23)',
  },
  previewText: {
    color: theme.palette.primary.main,
    height: 'auto',
    margin: '20px 0px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  preview: {
    marginLeft: '10px',
  },
}));
