import React from 'react';

// Libraries
import {Stage, Layer, Image} from 'react-konva';
import useImage from 'use-image';
import {makeStyles} from '@material-ui/core';

export interface CanvasProps {
  imageUrl: string;
  stageWidth: number;
}

function Canvas({imageUrl, stageWidth}: CanvasProps): JSX.Element {
  const [image] = useImage(imageUrl);

  const classes = useStyles();
  return (
    <Stage width={stageWidth} height={550} className={classes.stage}>
      <Layer>
        <Image image={image} />
      </Layer>
    </Stage>
  );
}

export default Canvas;

const useStyles = makeStyles(() => ({
  stage: {
    width: '100%',
    height: '550px',
    borderRadius: 6,
  },
}));
