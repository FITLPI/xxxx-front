import React, { CSSProperties, useState } from "react";
import { greyTransparent } from "../assets/colors";

interface IDisplayByHover {
  width: string;
  height: string;
  children?: React.ReactNode;
}

const DisplayByHover = ({ children, width, height }: IDisplayByHover) => {
  const defaultStyle: CSSProperties = {
    width: width,
    height: height,
    background: greyTransparent,
    opacity: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "0.5s",
  };

  const [styles, setStyles] = useState<CSSProperties>(defaultStyle);
  return (
    <div
      onMouseLeave={() => {
        setStyles(defaultStyle);
      }}
      onMouseEnter={() => {
        setStyles({ ...defaultStyle, opacity: "1" });
      }}
      style={styles}
    >
      {children}
    </div>
  );
};

export default DisplayByHover;
