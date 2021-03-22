import React from 'react';

// Libraries
import {Transformer} from 'react-konva';
// import Konva from 'konva';

export interface TransformerProps {
  transformerRef: React.RefObject<Transformer>;
  isSelected: boolean;
  transformerProps: any;
  children: React.ReactNode;
}

function TransformedComponent({
  children,
  transformerRef,
  isSelected,
  transformerProps,
}: TransformerProps): JSX.Element {
  return (
    <>
      {children}
      {isSelected && (
        <Transformer
          ref={transformerRef}
          {...transformerProps}
          boundBoxFunc={(oldBox, newBox) =>
            newBox.width < 5 || newBox.height < 5 ? oldBox : newBox
          }
        />
      )}
    </>
  );
}

export default TransformedComponent;
