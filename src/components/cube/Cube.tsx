import { useState } from "react";
import Side from "./side/Side";
import RoundedDiv from "../RoundedDiv";
import { defaultColorCube, greySimple } from "../../assets/colors";
import { degreeSide } from "../../share/helpers";

const Cube = () => {
  const [isRotate, setIsRotate] = useState<Boolean>(false);
  const [axisX, setAxisX] = useState<number>(45);
  const [axisY, setAxisY] = useState<number>(-45);
  const [zIndex, setZIndex] = useState<number>(-1);
  const [mouseMoveX, setMouseMoveX] = useState<number>(0);
  const [mouseMoveY, setMouseMoveY] = useState<number>(0);
  const sizeDefualt = "36vh";
  const halfSize = parseInt(sizeDefualt) / 2 + "vh";

  return (
    <RoundedDiv
      width="80vw"
      height="65vh"
      background={greySimple}
      isBorder={true}
      onMouseDown={() => {
        setIsRotate(true);
        setZIndex(5);
      }}
    >
      <div
        onMouseMove={(data) => {
          if (isRotate) {
            setAxisX((prev) => {
              let degre = 0;
              if (mouseMoveX !== data.screenX)
                degre = mouseMoveX < data.screenX ? 1 : -1;
              prev = prev + degre * (Math.abs(axisY) > 90 ? -1 : 1);
              return prev % 360;
            });
            setAxisY((prev) => {
              let degre = 0;
              if (mouseMoveY !== data.screenY)
                degre = mouseMoveY < data.screenY ? 1 : -1;
              prev = prev + degre * -1;
              return prev % 360;
            });
            setMouseMoveX(data.screenX);
            setMouseMoveY(data.screenY);
          }
        }}
        onMouseUp={() => {
          setIsRotate(false);
          setZIndex(-2);
        }}
        onMouseLeave={() => {
          if (zIndex > 0) setIsRotate(false);
          setZIndex(-2);
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          opacity: "0.0",
          zIndex: zIndex,
        }}
      ></div>
      <Side
        sizeDefualt={sizeDefualt}
        isMain={true}
        x={`${axisY}`}
        y={`${axisX}`}
      >
        {degreeSide.map(({ x, y }, iter) => (
          <Side
            isMesh={true}
            sizeDefualt={sizeDefualt}
            z={halfSize}
            x={x}
            y={y}
            backgroundSegment={defaultColorCube[iter]}
            key={iter + ""}
          />
        ))}
      </Side>
    </RoundedDiv>
  );
};

export default Cube;
