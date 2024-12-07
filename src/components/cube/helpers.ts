import {
  TransformMatrix,
  Cell,
  IInitialState,
  IAaction,
} from "../../share/types";

export function degToRad(deg: number) {
  return (deg / 180) * Math.PI;
}

export function rotateX(angle: number): TransformMatrix {
  angle = degToRad(angle);
  return [
    [1, 0, 0, 0],
    [0, Math.cos(angle), -Math.sin(angle), 0],
    [0, Math.sin(angle), Math.cos(angle), 0],
    [0, 0, 0, 1],
  ];
}

export function rotateY(angle: number): TransformMatrix {
  angle = degToRad(angle);
  return [
    [Math.cos(angle), 0, Math.sin(angle), 0],
    [0, 1, 0, 0],
    [-Math.sin(angle), 0, Math.cos(angle), 0],
    [0, 0, 0, 1],
  ];
}

export function rotateZ(angle: number): TransformMatrix {
  angle = degToRad(angle);
  return [
    [Math.cos(angle), -Math.sin(angle), 0, 0],
    [Math.sin(angle), Math.cos(angle), 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ];
}

export function combineMatrix(a: TransformMatrix, b: TransformMatrix) {
  const result = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  for (let j = 0; j < 4; j++) {
    for (let i = 0; i < 4; i++) {
      let value = 0;
      for (let k = 0; k < 4; k++) {
        value += a[k][i] * b[j][k];
      }
      result[j][i] = value;
    }
  }
  return result;
}

export function initialMatrix(): TransformMatrix {
  return [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ];
}

const elements = [
  { name: "left", color: "#ff9700" },
  { name: "right", color: "#ff0000" },
  { name: "down", color: "#ffee80" },
  { name: "up", color: "#ffffff" },
  { name: "front", color: "#009d19" },
  { name: "back", color: "#0751ef" },
];

export const cells: Cell[] = new Array(27).fill(0).map((_, i) => {
  let x = i % 3;
  let y = Math.floor(i / 3) % 3;
  let z = Math.floor(i / 9);

  function isHidden(name: string) {
    return (
      (name === "front" && z !== 2) ||
      (name === "back" && z !== 0) ||
      (name === "up" && y !== 0) ||
      (name === "down" && y !== 2) ||
      (name === "right" && x !== 2) ||
      (name === "left" && x !== 0)
    );
  }

  return {
    id: i,
    x,
    initialX: x,
    y,
    initialY: y,
    z,
    initialZ: z,
    rotates: initialMatrix(),
    map: {
      left: 0,
      right: 1,
      down: 2,
      up: 3,
      front: 4,
      back: 5,
    },
    sides: elements.map((e) => {
      return {
        ...e,
        color: isHidden(e.name) ? "#444" : e.color,
      };
    }),
  };
});

export const initialStateReduser: Cell = {
  id: -1,
  x: -1,
  initialX: -1,
  y: -1,
  initialY: -1,
  z: -1,
  initialZ: -1,
  rotates: initialMatrix(),
  map: {
    left: 0,
    right: 1,
    down: 2,
    up: 3,
    front: 4,
    back: 5,
  },
  sides: [],
};

export const defaultContext: IInitialState = {
  dispatch: (_e: IAaction<any>) => undefined,
  state: cells,
};

export const reducer = (state: Cell[], action: IAaction<any>): Cell[] => {
  switch (action.type) {
    case "Z":
      return state.map((cell: Cell): Cell => {
        if (cell.z === 1) {
          return {
            ...cell,
            x: 2 - cell.y,
            y: cell.x,
            rotates: combineMatrix(rotateZ(-90), cell.rotates),
          };
        }
        return { ...cell };
      });
    case "!Z":
      return state.map((cell: Cell): Cell => {
        if (cell.z === 1) {
          return {
            ...cell,
            x: cell.y,
            y: 2 - cell.x,
            rotates: combineMatrix(rotateZ(90), cell.rotates),
          };
        }
        return { ...cell };
      });
    case "Y":
      return state.map((cell: Cell): Cell => {
        if (cell.y === 1) {
          return {
            ...cell,
            x: cell.z,
            z: 2 - cell.x,
            rotates: combineMatrix(rotateY(-90), cell.rotates),
          };
        }
        return { ...cell };
      });
    case "!Y":
      return state.map((cell: Cell): Cell => {
        if (cell.y === 1) {
          return {
            ...cell,
            x: 2 - cell.z,
            z: cell.x,
            rotates: combineMatrix(rotateY(90), cell.rotates),
          };
        }
        return { ...cell };
      });
    case "X":
      return state.map((cell: Cell): Cell => {
        console.log(";jgf");
        if (cell.x === 1) {
          return {
            ...cell,
            y: 2 - cell.z,
            z: cell.y,
            rotates: combineMatrix(rotateX(-90), cell.rotates),
          };
        }
        return { ...cell };
      });
    case "!X":
      return state.map((cell: Cell): Cell => {
        if (cell.x === 1) {
          return {
            ...cell,
            y: cell.z,
            z: 2 - cell.y,
            rotates: combineMatrix(rotateX(90), cell.rotates),
          };
        }
        return { ...cell };
      });
    case "F":
      return state.map((cell: Cell): Cell => {
        if (cell.z === 2) {
          return {
            ...cell,
            y: cell.x,
            x: 2 - cell.y,
            rotates: combineMatrix(rotateZ(-90), cell.rotates),
          };
        }
        return { ...cell };
      });
    case "!F":
      return state.map((cell: Cell): Cell => {
        if (cell.z === 2) {
          return {
            ...cell,
            y: 2 - cell.x,
            x: cell.y,
            rotates: combineMatrix(rotateZ(90), cell.rotates),
          };
        }
        return { ...cell };
      });
    case "B":
      return state.map((cell: Cell): Cell => {
        if (cell.z === 0) {
          return {
            ...cell,
            y: 2 - cell.x,
            x: cell.y,
            rotates: combineMatrix(rotateZ(90), cell.rotates),
          };
        }
        return { ...cell };
      });
    case "!B":
      return state.map((cell: Cell): Cell => {
        if (cell.z === 0) {
          return {
            ...cell,
            y: cell.x,
            x: 2 - cell.y,
            rotates: combineMatrix(rotateZ(-90), cell.rotates),
          };
        }
        return { ...cell };
      });
    case "L":
      return state.map((cell: Cell): Cell => {
        if (cell.x === 0) {
          return {
            ...cell,
            y: cell.z,
            z: 2 - cell.y,
            rotates: combineMatrix(rotateX(90), cell.rotates),
          };
        }
        return { ...cell };
      });
    case "!L":
      return state.map((cell: Cell): Cell => {
        if (cell.x === 0) {
          return {
            ...cell,
            y: 2 - cell.z,
            z: cell.y,
            rotates: combineMatrix(rotateX(-90), cell.rotates),
          };
        }
        return { ...cell };
      });
    case "R":
      return state.map((cell: Cell): Cell => {
        if (cell.x === 2) {
          return {
            ...cell,
            y: 2 - cell.z,
            z: cell.y,
            rotates: combineMatrix(rotateX(-90), cell.rotates),
          };
        }
        return { ...cell };
      });
    case "!R":
      return state.map((cell: Cell): Cell => {
        if (cell.x === 2) {
          return {
            ...cell,
            y: cell.z,
            z: 2 - cell.y,
            rotates: combineMatrix(rotateX(90), cell.rotates),
          };
        }
        return { ...cell };
      });
    case "U":
      return state.map((cell: Cell): Cell => {
        if (cell.y === 0) {
          return {
            ...cell,
            x: 2 - cell.z,
            z: cell.x,
            rotates: combineMatrix(rotateY(90), cell.rotates),
          };
        }
        return { ...cell };
      });
    case "!U":
      return state.map((cell: Cell): Cell => {
        if (cell.y === 0) {
          return {
            ...cell,
            x: cell.z,
            z: 2 - cell.x,
            rotates: combineMatrix(rotateY(-90), cell.rotates),
          };
        }
        return { ...cell };
      });
    case "D":
      return state.map((cell: Cell): Cell => {
        if (cell.y === 2) {
          return {
            ...cell,
            x: cell.z,
            z: 2 - cell.x,
            rotates: combineMatrix(rotateY(-90), cell.rotates),
          };
        }
        return { ...cell };
      });
    case "!D":
      return state.map((cell: Cell): Cell => {
        if (cell.y === 2) {
          return {
            ...cell,
            x: 2 - cell.z,
            z: cell.x,
            rotates: combineMatrix(rotateY(90), cell.rotates),
          };
        }
        return { ...cell };
      });
    default: {
      return { ...state };
    }
  }
};
