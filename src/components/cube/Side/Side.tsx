import React, { CSSProperties } from "react";
import Mesh from "./Mesh";

interface ISide {
  sizeDefualt: string;
  isMain?: boolean;
  isMesh?: boolean;
  isSegment?: boolean;
  width?: string;
  height?: string;
  background?: string;
  x?: string;
  y?: string;
  z?: string;
  children?: React.ReactNode;
  margin?: string;
  outline?: string;
  backgroundSegment?: string;
}

const Side = ({
  isMain,
  isMesh,
  width,
  height,
  background,
  backgroundSegment,
  x,
  y,
  z,
  children,
  margin,
  outline,
  sizeDefualt,
}: ISide) => {
  const transform = `rotateX(${x || 0}deg) rotateY(${y || 0}deg) translateZ(${
    z || "0px"
  })`;

  const style: CSSProperties = {
    position: "absolute",
    width: width || sizeDefualt,
    height: height || sizeDefualt,
    transformStyle: "preserve-3d",
    transform: transform,
    background: background || "none",
    margin: margin || "0px",
    outline: outline || "none",
  };

  return (
    <div style={style}>
      {isMain && children}
      {isMesh && (
        <Mesh
          size={width || sizeDefualt}
          background={backgroundSegment || "none"}
        />
      )}
    </div>
  );
};

export default Side;
