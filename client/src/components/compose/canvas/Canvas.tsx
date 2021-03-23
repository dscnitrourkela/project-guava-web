import React from 'react';

// Libraries
import {Stage, Layer, Image} from 'react-konva';
import Konva from 'konva';
import useImage from 'use-image';
import {makeStyles} from '@material-ui/core';

// Components
import TextBox from './Text';

// State Handlers
import {useCompose} from '../../../store/contexts';
import {AuthorizerType} from '../../../store/action-types';

function Canvas(): JSX.Element {
  const [state] = useCompose();
  const {
    imageDimensions,
    stageDimensions,
    src: uploadImage,
  } = state.certificateImageDetails;
  const {authorizerDetails} = state;

  const stageHeight = stageDimensions.height;
  const aspectRatio = imageDimensions.width / imageDimensions.height;
  const imageRenderWidth = aspectRatio * stageDimensions.height;
  const imageRenderHeight = stageDimensions.height;
  const imagePositionX = 0;
  const imagePositionY = 0;

  const [image] = useImage(uploadImage);
  const [selected, setSelected] = React.useState<string | null>(null);

  const onSelect = (id: string): void => setSelected(id);

  const checkDeselectMouse = (
    event: Konva.KonvaEventObject<MouseEvent>,
  ): void => {
    setSelected(null);
    const clickedOnEmpty = event.target === event.target.getStage();
    if (clickedOnEmpty) {
      setSelected(null);
    }
  };
  const checkDeselectTouch = (
    event: Konva.KonvaEventObject<TouchEvent>,
  ): void => {
    setSelected(null);
    const clickedOnEmpty = event.target === event.target.getStage();
    if (clickedOnEmpty) {
      setSelected(null);
    }
  };

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
          onClick={checkDeselectMouse}
          onMouseDown={checkDeselectMouse}
          onTouchStart={checkDeselectTouch}
        />
      </Layer>
      <Layer>
        {authorizerDetails.length > 0 &&
          authorizerDetails.map((authorizer: AuthorizerType) => (
            <TextBox
              isSelected={authorizer.id === selected}
              onSelect={() => onSelect(authorizer.id)}
              key={authorizer.id}
              name={authorizer.name}
              position={authorizer.position}
              scale={authorizer.scale}
              dimensions={authorizer.dimensions}
            />
          ))}
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
