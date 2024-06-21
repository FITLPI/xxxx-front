import React from "react";

interface ICenterFullScreen {
  background?: string;
  children?: React.ReactNode;
}

const CenterFullScreen = ({ background, children }: ICenterFullScreen) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: background || "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};

export default CenterFullScreen;
