/* eslint-disable no-console */
/* eslint-disable no-alert */
import React, {useCallback} from 'react';

// Library
import {makeStyles, Typography} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCloudUploadAlt} from '@fortawesome/free-solid-svg-icons';
import {useDropzone} from 'react-dropzone';

// Components
import Canvas from './Canvas';

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

  const classes = useStyles();
  return (
    <>
      {uploadImage ? (
        <Canvas />
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
              Upload Signature
            </Typography>
            <Typography variant="body2" className={classes.secondaryText}>
              Drag and drop file here to upload.
            </Typography>
          </div>
        </div>
      )}
    </>
  );
}

export default Editor;

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '550px',
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
  },
  image: {
    height: 'auto',
    width: '100%',
  },
}));
