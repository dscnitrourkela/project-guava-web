import React from 'react';
import {Rect, Transformer} from 'react-konva';

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
  const shapeRef = React.useRef(null);
  const trRef = React.useRef(null);

  React.useEffect(() => {
    if (isSelected) {
      // @ts-ignore
      trRef?.current.nodes([shapeRef.current]);
      // @ts-ignore
      trRef?.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <>
      <Rect
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        cornerRadius={[7, 7, 7, 7]}
        onDragEnd={e => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        // @ts-ignore
        onTransformEnd={e => {
          // transformer is changing scale of the node
          // and NOT its width or height
          // but in the store we have only width and height
          // to match the data better we will reset scale on transform end
          const node = shapeRef.current;
          // @ts-ignore
          const scaleX = node.scaleX();
          // @ts-ignore
          const scaleY = node.scaleY();

          // we will reset it back
          // @ts-ignore
          node.scaleX(1);
          // @ts-ignore
          node.scaleY(1);
          onChange({
            ...shapeProps,
            // @ts-ignore
            x: node.x(),
            // @ts-ignore
            y: node.y(),
            // set minimal value
            // @ts-ignore
            width: Math.max(5, node.width() * scaleX),
            // @ts-ignore
            height: Math.max(node.height() * scaleY),
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};

export default Rectangle;
