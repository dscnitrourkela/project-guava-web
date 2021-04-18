import React from 'react';

// Libraries
import {Stage, Layer, Image} from 'react-konva';
import useImage from 'use-image';
import {makeStyles} from '@material-ui/core';

// Components
import TransformableText from './TransformableText';
import FixedText from './FixedText';

// State Handlers
// import {useCompose} from '../../../store/contexts';
import {
  ActionType,
  AuthorizerType,
  COMPOSE,
  InitialStateType,
} from '../../../store/action-types';

interface Props {
  isPreview?: boolean;
  state: InitialStateType;
  dispatch?: React.Dispatch<ActionType>;
}

const Canvas: React.FC<Props> = ({isPreview = false, dispatch, state}) => {
  // const [state, dispatch] = useCompose();
  const {
    imageDimensions,
    stageDimensions,
    src: uploadImage,
  } = state.certificateImageDetails;
  const {authorizerDetails, recipientName, validationDetails} = state;

  const [isRecipientNameSelected, setRecipientNameSelected] = React.useState(
    false,
  );
  const [
    isValidationDetailsSelected,
    setValidationDetailsSelected,
  ] = React.useState(false);

  const stageHeight = stageDimensions.height;
  const aspectRatio = imageDimensions.width / imageDimensions.height;
  const imageRenderWidth = aspectRatio * stageDimensions.height;
  const imageRenderHeight = stageDimensions.height;
  const imagePositionX = 0;
  const imagePositionY = 0;

  const [image] = useImage(uploadImage);
  const [selected, setSelected] = React.useState<string | null>(null);

  const onSelect = (id: string): void => setSelected(id);
  const checkDeselect = () => {
    setSelected(null);
    setRecipientNameSelected(false);
    setValidationDetailsSelected(false);
  };
  console.log(state);

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
          onMouseDown={checkDeselect}
          onTouchStart={checkDeselect}
        />

        {isPreview ? (
          <>
            <FixedText
              name={validationDetails.name}
              position={validationDetails.position}
              scale={validationDetails.scale}
              dimensions={validationDetails.dimensions}
              id={validationDetails.id}
            />

            <FixedText
              name={recipientName.name}
              position={recipientName.position}
              scale={recipientName.scale}
              dimensions={recipientName.dimensions}
              id={recipientName.id}
            />

            {authorizerDetails.length > 0 &&
              authorizerDetails.map((authorizer: AuthorizerType) => (
                <FixedText
                  key={authorizer.id}
                  name={authorizer.name}
                  position={authorizer.position}
                  scale={authorizer.scale}
                  dimensions={authorizer.dimensions}
                  id={authorizer.id}
                />
              ))}
          </>
        ) : (
          <>
            <TransformableText
              name={validationDetails.name}
              position={validationDetails.position}
              scale={validationDetails.scale}
              dimensions={validationDetails.dimensions}
              id={validationDetails.id}
              colour="red"
              isSelected={isValidationDetailsSelected}
              onSelect={() => setValidationDetailsSelected(true)}
              dispatch={dispatch}
              dragType={COMPOSE.UPDATE_VALIDATION_DETAILS}
              transformType={COMPOSE.UPDATE_VALIDATION_DETAILS}
            />

            <TransformableText
              name={recipientName.name}
              position={recipientName.position}
              scale={recipientName.scale}
              dimensions={recipientName.dimensions}
              id={recipientName.id}
              colour="lightgreen"
              isSelected={isRecipientNameSelected}
              onSelect={() => setRecipientNameSelected(true)}
              dispatch={dispatch}
              dragType={COMPOSE.UPDATE_RECIPIENT_DETAILS}
              transformType={COMPOSE.UPDATE_RECIPIENT_DETAILS}
            />

            {authorizerDetails.length > 0 &&
              authorizerDetails.map((authorizer: AuthorizerType) => (
                <TransformableText
                  key={authorizer.id}
                  isSelected={authorizer.id === selected}
                  onSelect={() => onSelect(authorizer.id)}
                  name={authorizer.name}
                  position={authorizer.position}
                  scale={authorizer.scale}
                  dimensions={authorizer.dimensions}
                  id={authorizer.id}
                  dispatch={dispatch}
                  dragType={COMPOSE.UPDATE_AUTHORIZER_POSITION}
                  transformType={COMPOSE.UPDATE_AUTHORIZER_SCALE}
                />
              ))}
          </>
        )}
      </Layer>
    </Stage>
  );
};

export default Canvas;

const useStyles = makeStyles(() => ({
  stage: {
    // borderRadius: 6,
    // paddingLeft: 0,
    // paddingRight: 0,
    // marginLeft: 'auto',
    // marginRight: 'auto',
    // display: 'block',
  },
}));
