/* eslint-disable no-console */
/* eslint-disable no-alert */
import React, {useCallback, useState} from 'react';

// Libraries
import {makeStyles, Typography} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCloudUploadAlt, faTimes} from '@fortawesome/free-solid-svg-icons';
import {useDropzone} from 'react-dropzone';

function UploadSignature(): JSX.Element {
  const [uploadImage, setUploadImage] = useState('');
  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.forEach((file: File) => {
      const reader = new FileReader();

      reader.onabort = () => window.alert('file reading was aborted');
      reader.onerror = () => window.alert('file reading has failed');
      reader.onload = () => {
        // Do whatever you want with the file contents
        const formData = new FormData();
        formData.append('datafiles', file);
        setUploadImage(URL.createObjectURL(file));
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);

  const {getRootProps, getInputProps} = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: 'image/*',
  });
  const classes = useStyles();
  return (
    <>
      {uploadImage ? (
        <div className={classes.uploadContainer}>
          <FontAwesomeIcon
            className={classes.cancel}
            size="lg"
            icon={faTimes}
            onClick={() => setUploadImage('')}
          />
          <img className={classes.image} src={uploadImage} alt="Upload" />
        </div>
      ) : (
        <div className={classes.uploadContainer} {...getRootProps()}>
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
            Transparent PNGs are easier to process.
          </Typography>
        </div>
      )}
    </>
  );
}

export default UploadSignature;

const useStyles = makeStyles(theme => ({
  uploadContainer: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: 6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    height: '150px',
    overflow: 'hidden',
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
  cancel: {
    position: 'absolute',
    top: 10,
    right: 10,
    color: '#c9c9c9',
  },
}));
