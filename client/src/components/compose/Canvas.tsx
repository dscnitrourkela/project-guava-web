import React from 'react';

// Libraries
import {Stage, Layer, Image, Group, Rect, Text, Transformer} from 'react-konva';
import useImage from 'use-image';
import {makeStyles} from '@material-ui/core';

// Components
import Rectangle from './canvas/Rect';

export interface CanvasProps {
  imageUrl: string;
  stageWidth: number;
  imageAspectRatio: number;
}

function Canvas({
  imageUrl,
  stageWidth,
  imageAspectRatio,
}: CanvasProps): JSX.Element {
  // Constants
  const stageHeight = 550;
  const imageHeight = 550;
  const imageWidth = imageAspectRatio * 550;
  const imageX = (stageWidth - imageWidth) / 2;
  const imageY = 0;

  const [image] = useImage(imageUrl);
  const [isSelected, selectShape] = React.useState(false);

  // @ts-ignore
  const checkDeselect = e => {
    // deselect when clicked on empty area
    selectShape(false);
    // const clickedOnEmpty = e.target === e.target.getStage();
    // if (clickedOnEmpty) {
    //   selectShape(false);
    // }
  };

  const classes = useStyles();
  return (
    <Stage width={stageWidth} height={stageHeight} className={classes.stage}>
      <Layer>
        <Image
          image={image}
          height={imageHeight}
          width={imageWidth}
          x={imageX}
          y={imageY}
          onMouseDown={checkDeselect}
          onTouchStart={checkDeselect}
        />
      </Layer>
      <Layer>
        <Rectangle
          shapeProps={{
            width: 300,
            height: 50,
            x: (stageWidth - 300) / 2,
            y: (stageHeight - 50) / 2,
            fill: 'lightblue',
          }}
          isSelected={isSelected}
          onSelect={() => {
            selectShape(true);
          }}
          onChange={() => {}}
        />
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
