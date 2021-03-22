import React from 'react';

// Libraries
import {Stage, Layer, Image} from 'react-konva';
import Konva from 'konva';
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

  const checkDeselectMouse = (
    event: Konva.KonvaEventObject<MouseEvent>,
  ): void => {
    const clickedOnEmpty = event.target === event.target.getStage();
    if (clickedOnEmpty) {
      selectShape(false);
    }
  };
  const checkDeselectTouch = (
    event: Konva.KonvaEventObject<TouchEvent>,
  ): void => {
    const clickedOnEmpty = event.target === event.target.getStage();
    if (clickedOnEmpty) {
      selectShape(false);
    }
  };

  // const onChange = (newAttrs: any) => {
  //   const rects = rectangles.slice();
  //   rects[i] = newAttrs;
  //   setRectangles(rects);
  // };

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
          onMouseDown={checkDeselectMouse}
          onTouchStart={checkDeselectTouch}
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
        <Rectangle
          shapeProps={{
            width: 300,
            height: 50,
            x: (stageWidth - 300) / 2,
            y: (stageHeight - 50) / 2,
            fill: 'lightgreen',
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
