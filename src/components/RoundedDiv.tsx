import React from "react";
import Center from "./Center";

interface IRoundedDiv {
  children?: React.ReactNode;
  background?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  margin?: string;
  padding?: string;
  maxHeight?: string;
  maxWidth?: string;
  isBorder?: true;
  onMouseDown?: () => void;
  onWheel?: (_data: any) => void;
}

const RoundedDiv = ({
  children,
  background,
  width,
  height,
  borderRadius,
  margin,
  padding,
  maxHeight,
  maxWidth,
  isBorder,
  onMouseDown,
  onWheel,
}: IRoundedDiv) => {
  const autoCulcMax = (value: string, coef: number): string => {
    const result = coef * parseInt(value);
    const units = value
      .split("")
      .filter((char) => !parseInt(char))
      .join("");
    return result + units;
  };

  return (
    <div
      onWheel={onWheel}
      onMouseDown={onMouseDown}
      style={{
        background: (!isBorder && background) || "none",
        width: width || "90vw",
        height: height || "86vh",
        borderRadius: borderRadius || "5vh",
        margin: margin || "0px",
        padding: padding || "0px",
        maxHeight: maxHeight || autoCulcMax(height || "80vh", 3),
        maxWidth: maxWidth || autoCulcMax(width || "90vw", 3),
        border: isBorder ? `0.1vh solid ${background}` : "none",
      }}
    >
      <Center>{children}</Center>
    </div>
  );
};

export default RoundedDiv;
