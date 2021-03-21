/* eslint-disable no-console */
/* eslint-disable no-alert */
import React, {useCallback, useState, useEffect, useRef} from 'react';

// Library
import {makeStyles, Typography} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCloudUploadAlt} from '@fortawesome/free-solid-svg-icons';
import {useDropzone} from 'react-dropzone';

// Components
import Canvas from './Canvas';

function Editor(): JSX.Element {
  const [uploadImage, setUploadImage] = useState('');
  const [imageDimensions, setImageDimensions] = useState<{
    width: number;
    height: number;
  }>({width: 0, height: 0});
  const [stageWidth, setStageWidth] = useState(500);
  const stageRef = useRef(null);

  const onDrop = useCallback(acceptedFiles => {
    // @ts-ignore
    const file = acceptedFiles[0];
    const i = new Image();
    i.src = URL.createObjectURL(file);

    i.onload = () => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setUploadImage(i.src);
        setImageDimensions({width: i.width, height: i.height});
      };
    };
    // acceptedFiles.forEach((file: File) => {
    //   const reader = new FileReader();

    //   reader.onabort = () => window.alert('file reading was aborted');
    //   reader.onerror = () => window.alert('file reading has failed');
    //   reader.onload = () => {
    //     // Do whatever you want with the file contents
    //     const formData = new FormData();
    //     formData.append('datafiles', file);
    //     console.log(file);
    //     setUploadImage(URL.createObjectURL(file));
    //   };
    //   reader.readAsArrayBuffer(file);
    // });
  }, []);

  // @ts-ignore
  const checkSize = () => setStageWidth(stageRef.current?.offsetWidth);

  const {getRootProps, getInputProps} = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: 'image/*',
  });

  useEffect(() => {
    checkSize();
    window.addEventListener('resize', checkSize);

    return window.removeEventListener('resize', checkSize);
  }, []);

  const classes = useStyles();
  return (
    <>
      {uploadImage ? (
        <Canvas
          imageAspectRatio={imageDimensions.width / imageDimensions.height}
          stageWidth={stageWidth}
          imageUrl={uploadImage}
        />
      ) : (
        <div ref={stageRef} className={classes.root}>
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
