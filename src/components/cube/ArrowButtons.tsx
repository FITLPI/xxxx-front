import { useContext, useState } from "react";
import { CubeContext } from "./ContextCube";
import { CSSProperties } from "styled-components";
import { IAaction, IBaseComponent, ShadowAction } from "../../share/types";

interface IArrowButtons extends IBaseComponent {
  blockAnimate: (s: number) => void;
  k?: number;
  actions: ShadowAction;
}

const ArrowButtons = ({ blockAnimate, k, actions }: IArrowButtons) => {
  const { dispatch } = useContext(CubeContext);
  const [buttonStyle, setButtonStyle] = useState<CSSProperties>({
    opacity: "0",
  });

  const onClickHandler = (action: IAaction<any>) => {
    blockAnimate(1.1);
    setButtonStyle((prev) => ({ ...prev, opacity: "0" }));
    dispatch(action);
  };
  return (
    <div
      onMouseEnter={() => setButtonStyle((prev) => ({ ...prev, opacity: "1" }))}
      onMouseLeave={() => setButtonStyle((prev) => ({ ...prev, opacity: "0" }))}
      onMouseMove={() => setButtonStyle((prev) => ({ ...prev, opacity: "1" }))}
      className="grid-for-arows"
    >
      <div></div>
      <button style={buttonStyle} onClick={() => onClickHandler(actions.top)}>
        {"⮝"}
      </button>
      <div></div>
      <button style={buttonStyle} onClick={() => onClickHandler(actions.left)}>
        {"⮜"}
      </button>
      <div>{k}</div>
      <button onClick={() => onClickHandler(actions.right)} style={buttonStyle}>
        {"⮞"}
      </button>
      <div></div>
      <button
        onClick={() => onClickHandler(actions.bottom)}
        style={buttonStyle}
      >
        {"⮟"}
      </button>{" "}
      <div></div>
    </div>
  );
};

export default ArrowButtons;
