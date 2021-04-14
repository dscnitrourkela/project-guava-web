import React from 'react';

// Libraries
import {Rect, Text, Group} from 'react-konva';
import Konva from 'konva';

export interface TextProps {
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
  colour?: string;
}

const FixedText: React.FC<TextProps> = ({
  dimensions,
  position,
  scale,
  name,
}) => {
  const shapeRef = React.useRef<Konva.Group>(null);

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
    <Group ref={shapeRef} {...groupProps}>
      <Rect
        width={dimensions.width}
        height={dimensions.height}
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
  );
};

export default FixedText;
