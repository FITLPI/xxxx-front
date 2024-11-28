import { useState } from "react";
import RoundedDiv from "../components/RoundedDiv";
import { greySimple } from "../assets/colors";
import { RubiksCubeСontainer } from "../components/cube/RubiksCubeСontainer";

const RubiksCube = () => {
  const [isRotate, setIsRotate] = useState<boolean>(false);
  const [axisX, setAxisX] = useState<number>(0);
  const [axisY, setAxisY] = useState<number>(0);
  const [axisZ, setAxisZ] = useState<number>(0);
  const [zIndex, setZIndex] = useState<number>(-3);
  const [mouseMoveX, setMouseMoveX] = useState<number>(0);
  const [mouseMoveY, setMouseMoveY] = useState<number>(0);

  return (
    <RoundedDiv
      width="80vw"
      height="60vh"
      background={greySimple}
      isBorder={true}
    >
      <RoundedDiv
        onMouseDown={() => {
          console.log(axisZ);
          setIsRotate(true);
          setZIndex(5);
        }}
        onWheel={(data) => {
          setAxisZ((prev) => {
            const degre = data.deltaY > 0 ? 10 : -10;
            prev = prev + degre;
            return prev % 360;
          });
        }}
        width="80vw"
        height="60vh"
      ></RoundedDiv>
      <div
        onMouseMove={(data) => {
          data.preventDefault();
          console.log(isRotate);
          if (isRotate) {
            setAxisX((prev) => {
              let degre = 0;
              if (mouseMoveX !== data.screenX)
                degre = mouseMoveX < data.screenX ? 1 : -1;
              prev = prev + degre * (Math.abs(axisY) > 90 ? -2 : 2);
              return prev % 360;
            });
            setAxisY((prev) => {
              let degre = 0;
              if (mouseMoveY !== data.screenY)
                degre = mouseMoveY < data.screenY ? 2 : -2;
              prev = prev + degre * -1;
              return prev % 360;
            });
            setMouseMoveX(data.screenX);
            setMouseMoveY(data.screenY);
          }
        }}
        onMouseUp={(event) => {
          event.preventDefault();
          setIsRotate(false);
          setZIndex(-3);
        }}
        onMouseLeave={(event) => {
          event.preventDefault();
          if (zIndex > 0) setIsRotate(false);
          setZIndex(-3);
        }}
        style={{
          position: "absolute",
          top: "5vh",
          width: "100vw",
          height: "90vh",
          opacity: "0.6",
          zIndex: zIndex,
        }}
      ></div>
      <RubiksCubeСontainer x={axisY} y={axisX} z={axisZ} />
    </RoundedDiv>
  );
};

export default RubiksCube;
