import { useContext, useEffect, useState } from "react";
import { IBaseComponent, ShadowAction } from "../../share/types";
import { CubeContext } from "./ContextCube";

interface IMoseMove extends IBaseComponent {
  actions: ShadowAction;
  blockAnimate: (s: number) => void;
}
const MoseMove = ({ actions, blockAnimate }: IMoseMove) => {
  const [moveArea, setMoveArea] = useState<boolean>();
  const [mouseMoveData, setMouseMoveData] =
    useState<React.MouseEvent<HTMLDivElement, MouseEvent>>();
  const { dispatch } = useContext(CubeContext);

  const exucuteAction = (
    data?: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!data) return;

    const x = data.movementX;
    const y = data.movementY;
    if (Math.abs(x) > Math.abs(y)) {
      dispatch(x > 0 ? actions.right : actions.left);
    } else {
      dispatch(y > 0 ? actions.bottom : actions.top);
    }
    blockAnimate(1.1);
  };

  useEffect(() => {
    moveArea == false && exucuteAction(mouseMoveData);
  }, [moveArea]);

  return (
    <div
      style={{ width: "100%", height: "100%" }}
      onMouseDown={() => setMoveArea(true)}
      onMouseUp={() => setMoveArea(false)}
      onMouseLeave={() => setMoveArea(false)}
      onMouseMove={(data) => moveArea && setMouseMoveData(data)}
    >
      {moveArea && (
        <div
          style={{
            top: "0",
            left: "0",
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "black",
            opacity: "0.1",
          }}
        ></div>
      )}
    </div>
  );
};

export default MoseMove;
