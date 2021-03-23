import React from 'react';

// Libraries
import {Stage, Layer, Image} from 'react-konva';
import Konva from 'konva';
import useImage from 'use-image';
import {makeStyles} from '@material-ui/core';

// Components
import Rectangle from './canvas/Rect';

// State Handlers
import {useCompose} from '../../store/contexts';
// import {COMPOSE} from '../../store/action-types';

function Canvas(): JSX.Element {
  const [state] = useCompose();
  const {
    imageDimensions,
    stageDimensions,
    src: uploadImage,
  } = state.certificateImageDetails;

  const stageHeight = stageDimensions.height;
  const aspectRatio = imageDimensions.width / imageDimensions.height;
  const imageRenderWidth = aspectRatio * stageDimensions.height;
  const imageRenderHeight = stageDimensions.height;
  const imagePositionX = 0;
  const imagePositionY = 0;

  const [image] = useImage(uploadImage);
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
    <Stage
      width={imageRenderWidth}
      height={stageHeight}
      className={classes.stage}
    >
      <Layer>
        <Image
          image={image}
          height={imageRenderHeight}
          width={imageRenderWidth}
          x={imagePositionX}
          y={imagePositionY}
          onMouseDown={checkDeselectMouse}
          onTouchStart={checkDeselectTouch}
        />
      </Layer>
      <Layer>
        <Rectangle
          shapeProps={{
            width: 300,
            height: 50,
            x: (imageRenderWidth - 300) / 2,
            y: (imageRenderHeight - 50) / 2,
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
            x: (imageRenderWidth - 300) / 2,
            y: (imageRenderHeight - 50) / 2,
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
    borderRadius: 6,
    paddingLeft: 0,
    paddingRight: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
  },
}));
