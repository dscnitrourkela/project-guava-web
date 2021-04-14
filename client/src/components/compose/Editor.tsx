import React, {useCallback} from 'react';

// Library
import {makeStyles, Typography} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashAlt, faCloudUploadAlt} from '@fortawesome/free-solid-svg-icons';
import {useDropzone} from 'react-dropzone';

// Components
import EditorMenu from './EditorMenu';
import Canvas from './canvas/Canvas';
import RecipientsImport from './RecipientsImport';
import RecipientTable from './RecipientTable';

// State Handlers
import {useCompose} from '../../store/contexts';
import {COMPOSE} from '../../store/action-types';

function Editor(): JSX.Element {
  const [state, dispatch] = useCompose();
  const {src: uploadImage} = state.certificateImageDetails;

  const onDrop = useCallback(
    acceptedFiles => {
      // @ts-ignore
      const file = acceptedFiles[0];
      const i = new Image();
      i.src = URL.createObjectURL(file);

      i.onload = () => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          dispatch({
            type: COMPOSE.ADD_IMAGE,
            payload: {
              src: i.src,
              imageDimensions: {
                width: i.width,
                height: i.height,
              },
            },
          });
        };
      };
    },
    [dispatch],
  );

  const {getRootProps, getInputProps} = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: 'image/*',
  });

  const handleRemoveImage = () => dispatch({type: COMPOSE.REMOVE_IMAGE});

  const classes = useStyles();
  return (
    <>
      {uploadImage ? (
        <>
          <EditorMenu />
          <div className={classes.canvasContainer}>
            <Canvas />
            <FontAwesomeIcon
              className={classes.deleteImageIcon}
              size="4x"
              icon={faTrashAlt}
              onClick={handleRemoveImage}
              onMouseDown={handleRemoveImage}
            />
          </div>
        </>
      ) : (
        <div className={classes.root}>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <Typography variant="body1" className={classes.primaryText}>
              <FontAwesomeIcon
                style={{marginRight: 10}}
                size="lg"
                icon={faCloudUploadAlt}
              />
              Upload Certificate Template Image
            </Typography>
            <Typography variant="body2" className={classes.secondaryText}>
              Drag and drop file here to upload.
            </Typography>
          </div>
        </div>
      )}
      <RecipientsImport />
      <RecipientTable />
    </>
  );
}

export default Editor;

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '550px',
    marginTop: 20,
    minHeight: '550px',
    backgroundColor: theme.palette.background.default,
    borderRadius: 6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    border: '1px solid rgba(0,0,0,0.23)',
  },
  primaryText: {
    color: theme.palette.primary.main,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  secondaryText: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    color: 'rgba(0,0,0,0.23)',
    width: '100%',
    textAlign: 'center',
  },
  image: {
    height: 'auto',
    width: '100%',
  },
  canvasContainer: {
    width: '100%',
    height: '550px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteImageIcon: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    backgroundColor: '#fff',
    borderRadius: 4,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    padding: '10px',
    color: 'rgba(0, 0, 0, 0.6)',
    '&:hover': {
      cursor: 'pointer',
    },
    '&:active': {
      boxShadow: '0px 5px 7px rgba(0, 0, 0, 0.25)',
      transform: 'translateY(2px)',
    },
  },
}));
