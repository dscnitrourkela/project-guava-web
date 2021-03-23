import React from 'react';

// Libraries
import {Rect, Transformer, Text, Group} from 'react-konva';
import Konva from 'konva';

// State Handlers
// import {COMPOSE} from '../../../store/action-types';

export interface TextProps {
  isSelected: boolean;
  onSelect: () => void;
  dimensions: {
    width: number;
    height: number;
  };
  position: {
    x: number;
    y: number;
  };
  scale: {
    x: number;
    y: number;
  };
  name: string;
  id: string;
  // onDragEnd: any;
  dispatch: any;
  transformType: string;
  dragType: string;
}

const Rectangle: React.FC<TextProps> = ({
  isSelected,
  onSelect,
  dimensions,
  position,
  scale,
  name,
  id,
  // onDragEnd,
  dispatch,
  transformType,
  dragType,
}) => {
  const shapeRef = React.useRef<Konva.Group>(null);
  const transformerRef = React.useRef<Konva.Transformer>(null);

  React.useEffect(() => {
    if (isSelected && transformerRef.current && shapeRef.current) {
      transformerRef.current.nodes([shapeRef.current]);
      // @ts-ignore
      transformerRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  const onTransformEnd = (): void => {
    if (shapeRef.current) {
      const node = shapeRef.current;
      dispatch({
        type: transformType,
        payload: {id, scale: node.scale()},
      });
    }
  };

  const onDragEnd = (e: Konva.KonvaEventObject<DragEvent>): void =>
    dispatch({
      type: dragType,
      payload: {id, position: {x: e.target.x(), y: e.target.y()}},
    });

  const groupProps = {
    width: dimensions.width,
    height: dimensions.height,
    offsetX: dimensions.width / 2,
    offsetY: dimensions.height / 2,
    x: position.x,
    y: position.y,
    scaleX: scale.x,
    scaleY: scale.y,
  };

  return (
    <>
      <Group
        ref={shapeRef}
        onClick={onSelect}
        onTap={onSelect}
        draggable
        onDragEnd={onDragEnd}
        onTransformEnd={onTransformEnd}
        {...groupProps}
      >
        <Rect
          width={dimensions.width}
          height={dimensions.height}
          fill="lightblue"
          cornerRadius={[7, 7, 7, 7]}
        />
        <Text
          width={dimensions.width}
          height={dimensions.height}
          align="center"
          verticalAlign="middle"
          text={name}
          fontSize={20}
        />
      </Group>
      {isSelected && (
        <Transformer
          ref={transformerRef}
          boundBoxFunc={(oldBox, newBox) =>
            newBox.width < 5 || newBox.height < 5 ? oldBox : newBox
          }
        />
      )}
    </>
  );
};

export default Rectangle;
