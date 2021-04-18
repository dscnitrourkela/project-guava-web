import React from 'react';

// Libraries
import {makeStyles, Typography} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretRight} from '@fortawesome/free-solid-svg-icons';

// Components
import {CustomModal} from '../shared';
import Canvas from './canvas/Canvas';

// State Handlers
import {useCompose} from '../../store/contexts';
// import {COMPOSE} from '../../store/action-types';

// Hooks
import {useToggle} from '../../hooks';

function EditorMenu(): JSX.Element {
  const [state, dispatch] = useCompose();
  const [modalOpen, toggleModalOpen, setModalOpen] = useToggle(false);

  // const [, dispatch] = useCompose();
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Typography
          onClick={toggleModalOpen}
          variant="body1"
          className={classes.previewText}
        >
          Preview
          <FontAwesomeIcon
            className={classes.preview}
            size="lg"
            icon={faCaretRight}
          />
        </Typography>
      </div>

      <CustomModal open={modalOpen} setOpen={setModalOpen}>
        <Canvas state={state} dispatch={dispatch} isPreview />
      </CustomModal>
    </>
  );
}

export default EditorMenu;

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '70px',
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'flex-end',
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
