import React from 'react';

// Libraries
import {Rect, Text, Group} from 'react-konva';
import Konva from 'konva';

export interface FixedTextProps {
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
  fontSize?: number;
}

const FixedText: React.FC<FixedTextProps> = ({
  dimensions,
  position,
  scale,
  name,
  colour = 'white',
  fontSize = 20,
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
        fontSize={fontSize}
        fill={colour}
        fontFamily="'Sofia Pro Medium'"
      />
    </Group>
  );
};

export default FixedText;
