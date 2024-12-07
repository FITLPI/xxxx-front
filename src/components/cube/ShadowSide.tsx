import { IBaseComponent, ShadowAction } from "../../share/types";
import ArrowButtons from "./ArrowButtons";
import MoseMove from "./MoseMove";

interface IShadowSide extends IBaseComponent {
  k: number;
  isEnable: boolean;
  blockAnimate: (s: number) => void;
  actions: ShadowAction;
}

const ShadowSide = ({ k, isEnable, blockAnimate, actions }: IShadowSide) => {
  return (
    <div
      style={{
        background: "rgba(25, 25, 25, 0.0)",
        transform: `translate3d(0, 0, calc(${
          k % 2 ? "3" : "-3"
        }.003 * var(--sixth-size))) rotateY(${k % 2 ? "0" : "180"}deg)`,
        width: "var(--thrid-size)",
        height: "var(--thrid-size)",
      }}
    >
      {isEnable && true ? (
        <ArrowButtons blockAnimate={blockAnimate} actions={actions} />
      ) : (
        <MoseMove blockAnimate={blockAnimate} actions={actions} />
      )}
    </div>
  );
};

export default ShadowSide;
