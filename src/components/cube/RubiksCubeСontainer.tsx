import { useReducer } from "react";
import { cells, reducer } from "./helpers";
import "./style.css";
import { СhildCube } from "./СhildCube";
import { CubeContext } from "./ContextCube";
import Shadow from "../../widgets/Shadow";

interface RubiksCubeСontainer {
  x?: number;
  y?: number;
  z?: number;
}

export const RubiksCubeСontainer = ({ x, y, z }: RubiksCubeСontainer) => {
  const [state, dispatch] = useReducer(reducer, cells);
  const initValue = {
    state,
    dispatch,
  };

  return (
    <CubeContext.Provider value={initValue}>
      <div
        className="wrapper"
        style={{
          transform: `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`,
        }}
      >
        <Shadow />
        <div className="rubiks-cube">
          {state.map((cell) => (
            <СhildCube key={cell.id} cell={cell} />
          ))}
        </div>
      </div>
    </CubeContext.Provider>
  );
};
