import React, { useEffect } from "react";

interface ICenter {
  background?: string;
  children?: React.ReactNode;
  width?: string;
  height?: string;
  display?: string;
}

const Center = ({ background, children, width, height, display }: ICenter) => {
  return (
    <div
      style={{
        width: width || "100%",
        height: height || "100%",
        background: background || "none",
        display: display || "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};

export default Center;
