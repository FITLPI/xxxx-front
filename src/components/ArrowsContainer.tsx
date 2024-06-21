import React from "react";
import ArrowWithDirection from "./ArrowWithDirection";

interface IArrowsContainer {
  isVertical: boolean;
  children: React.ReactNode;
}

const ArrowsContainer = ({ isVertical, children }: IArrowsContainer) => {
  return (
    <div>
      <ArrowWithDirection />
      <div>{children}</div>
    </div>
  );
};

export default ArrowsContainer;
``;
