import React, { CSSProperties } from "react";
import Mesh from "./Mesh";
import "./style.css";

interface ISide {
  sizeDefualt: string;
  data?: string;
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
  rotations?: boolean;
  onClickSegment?: (data: string) => void;
  anyStyle?: CSSProperties;
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
  rotations,
  anyStyle,
  data,
  onClickSegment,
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
    zIndex: "2",
    transition: "1s",
    ...anyStyle,
  };

  return (
    <div
      className={rotations ? "spin" : undefined}
      onClick={() => onClickSegment && onClickSegment(data ?? "")}
      style={style}
    >
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
