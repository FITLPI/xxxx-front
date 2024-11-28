import { IBaseComponent } from "../../share/types";

interface ISide extends IBaseComponent {
  isBlack: boolean;
}

export const Side = ({ style, children, isBlack }: ISide) => {
  return (
    <div
      className={`side-${style && style.background} side`}
      style={{ ...style, background: isBlack ? "black" : style?.background }}
    >
      {children}
    </div>
  );
};

export default Side;
