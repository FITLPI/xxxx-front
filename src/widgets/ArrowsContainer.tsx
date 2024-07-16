import React, { CSSProperties, useRef, useState } from "react";
import ArrowWithDirection from "../components/ArrowWithDirection";
import Center from "../components/Center";
import DisplayByHover from "../components/DisplayByHover";

interface IArrowsContainer {
  isVertical: boolean;
  children: React.ReactNode;
}

const ArrowsContainer = ({ isVertical, children }: IArrowsContainer) => {
  const width = useRef<string>(isVertical ? "100%" : "2.5%");
  const height = useRef<string>(isVertical ? "5%" : "100%");

  return (
    <Center display={isVertical ? "block" : "flex"}>
      <DisplayByHover width={width.current} height={height.current}>
        <ArrowWithDirection direction={isVertical ? "top" : "left"} />
      </DisplayByHover>
      <div
        style={{
          width: isVertical ? "100%" : "95%",
          height: isVertical ? "90%" : "100%",
        }}
      >
        {children}
      </div>
      <DisplayByHover width={width.current} height={height.current}>
        <ArrowWithDirection direction={isVertical ? "bottom" : "right"} />
      </DisplayByHover>
    </Center>
  );
};

export default ArrowsContainer;
