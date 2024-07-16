import React, { CSSProperties, useState } from "react";
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
  isSegment,
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

  const onClickSegment = () => {
    isSegment && console.log("click on segment");
  };

  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div style={style} onMouseDown={onClickSegment}>
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
