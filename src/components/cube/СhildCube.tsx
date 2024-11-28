import { Cell, IBaseComponent, TransformMatrix } from "../../share/types";
import { COLORS } from "../../assets/colors";
import Side from "./Side";

interface IСhildCube extends IBaseComponent {
  cell: Cell;
}

export const СhildCube = ({ cell }: IСhildCube) => {
  const matrixToCss = (matrix: TransformMatrix) => {
    return `matrix3d(${matrix.flat().join(",")})`;
  };

  return (
    <div
      className="child-cube-wrapper"
      style={{ transform: `${matrixToCss(cell.rotates)}` }}
    >
      <div
        className="child-cube"
        style={{
          transform:
            "translate3d(" +
            `calc(var(--thrid-size)*${cell.initialX}), ` +
            `calc(var(--thrid-size)*${cell.initialY}), ` +
            `calc(var(--thrid-size)*${cell.initialZ})` +
            ")",
        }}
      >
        {COLORS.map((color: string, iter) => {
          var name = cell.sides[iter].name;
          var isBalck =
            (name === "up" && cell.initialZ !== 2) ||
            (name === "right" && cell.initialZ !== 0) ||
            (name === "back" && cell.initialY !== 2) ||
            (name === "front" && cell.initialY !== 0) ||
            (name === "down" && cell.initialX !== 2) ||
            (name === "left" && cell.initialX !== 0);
          return (
            <Side
              key={10 * cell.id + iter}
              isBlack={isBalck}
              style={{ background: color, opacity: "1" }}
              children={`${cell.initialX};${cell.initialY};${cell.initialZ}`}
            />
          );
        })}
      </div>
    </div>
  );
};
