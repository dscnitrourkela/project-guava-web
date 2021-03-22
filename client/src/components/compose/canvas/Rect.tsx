import React from 'react';

// Libraries
import {Rect, Transformer} from 'react-konva';
import Konva from 'konva';

export interface RectProps {
  isSelected: boolean;
  onSelect: () => void;
  // @ts-ignore
  onChange: (...args) => void;
  shapeProps: any;
}

const Rectangle: React.FC<RectProps> = ({
  shapeProps,
  isSelected,
  onSelect,
  onChange,
}) => {
  const shapeRef = React.useRef<Konva.Node>(null);
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
      const scaleX = node.scaleX();
      const scaleY = node.scaleY();
      node.scaleX(1);
      node.scaleY(1);
      onChange({
        ...shapeProps,
        x: node.x(),
        y: node.y(),
        width: Math.max(5, node.width() * scaleX),
        height: Math.max(node.height() * scaleY),
      });
    }
  };

  const onDragEnd = (e: Konva.KonvaEventObject<DragEvent>): void => {
    onChange({
      ...shapeProps,
      x: e.target.x(),
      y: e.target.y(),
    });
  };

  return (
    <>
      <Rect
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        draggable
        cornerRadius={[7, 7, 7, 7]}
        onDragEnd={onDragEnd}
        onTransformEnd={onTransformEnd}
        onChange={onChange}
        {...shapeProps}
      />
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
