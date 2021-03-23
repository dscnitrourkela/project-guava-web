import React from 'react';

// Libraries
import {Rect, Transformer, Text, Group} from 'react-konva';
import Konva from 'konva';

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
}

const Rectangle: React.FC<TextProps> = ({
  isSelected,
  onSelect,
  dimensions,
  position,
  scale,
  name,
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

  const onDragEnd = (e: Konva.KonvaEventObject<DragEvent>): void => {
    console.log(e.target.x());
    // TODO: Store x and y positions for this authorizer
  };

  const onTransformEnd = (): void => {
    if (shapeRef.current) {
      const node = shapeRef.current;
      console.log(node.scale());
    }
    // TODO: Store x and y scales for this authorizer
  };

  // TODO: Store initial width and height of the text box

  const commonProps = {
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
      >
        <Rect {...commonProps} fill="lightblue" cornerRadius={[7, 7, 7, 7]} />
        <Text
          {...commonProps}
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
