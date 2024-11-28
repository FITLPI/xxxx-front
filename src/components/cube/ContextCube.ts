import { createContext } from "react";
import { defaultContext } from "./helpers";
import { IAaction, Rotates, ShadowAction } from "../../share/types";

export const up = (payload?: any): IAaction<any> => ({
  type: "U",
  payload,
});

export const upReverse = (payload?: any): IAaction<any> => ({
  type: "!U",
  payload,
});

export const down = (payload?: any): IAaction<any> => ({
  type: "D",
  payload,
});

export const downReverse = (payload?: any): IAaction<any> => ({
  type: "!D",
  payload,
});

export const left = (payload?: any): IAaction<any> => ({
  type: "L",
  payload,
});

export const leftReverse = (payload?: any): IAaction<any> => ({
  type: "!L",
  payload,
});

export const right = (payload?: any): IAaction<any> => ({
  type: "R",
  payload,
});

export const rightReverse = (payload?: any): IAaction<any> => ({
  type: "!R",
  payload,
});

export const back = (payload?: any): IAaction<any> => ({
  type: "B",
  payload,
});

export const backReverse = (payload?: any): IAaction<any> => ({
  type: "!B",
  payload,
});

export const front = (payload?: any): IAaction<any> => ({
  type: "F",
  payload,
});

export const frontReverse = (payload?: any): IAaction<any> => ({
  type: "!F",
  payload,
});

export const z = (payload?: any): IAaction<any> => ({
  type: "Z",
  payload,
});

export const zReverse = (payload?: any): IAaction<any> => ({
  type: "!Z",
  payload,
});

export const y = (payload?: any): IAaction<any> => ({
  type: "Y",
  payload,
});

export const yReverse = (payload?: any): IAaction<any> => ({
  type: "!Y",
  payload,
});

export const x = (payload?: any): IAaction<any> => ({
  type: "X",
  payload,
});

export const xReverse = (payload?: any): IAaction<any> => ({
  type: "!X",
  payload,
});

export const CubeContext = createContext(defaultContext);

export const mix = (dispatch: React.Dispatch<IAaction<any>>): void => {
  for (let i = 0; i < 30; i++) {
    const rnd = Math.floor(Math.random() * 12);
    switch (rnd) {
      case 0:
        dispatch(up());
        break;
      case 1:
        dispatch(upReverse());
        break;
      case 2:
        dispatch(down());
        break;
      case 3:
        dispatch(downReverse());
        break;
      case 4:
        dispatch(front());
        break;
      case 5:
        dispatch(frontReverse());
        break;
      case 6:
        dispatch(back());
        break;
      case 7:
        dispatch(backReverse());
        break;
      case 8:
        dispatch(left());
        break;
      case 9:
        dispatch(leftReverse());
        break;
      case 10:
        dispatch(right());
        break;
      case 11:
        dispatch(rightReverse());
        break;
    }
  }
};
const shadowSidesBlue: ShadowAction[] = [
  {
    left: up(),
    right: upReverse(),
    top: left(),
    bottom: leftReverse(),
  },
  {
    left: up(),
    right: upReverse(),
    top: xReverse(),
    bottom: x(),
  },
  {
    left: up(),
    right: upReverse(),
    top: rightReverse(),
    bottom: right(),
  },
  {
    left: yReverse(),
    right: y(),
    top: left(),
    bottom: leftReverse(),
  },
  {
    left: yReverse(),
    right: y(),
    top: xReverse(),
    bottom: x(),
  },
  {
    left: yReverse(),
    right: y(),
    top: rightReverse(),
    bottom: right(),
  },
  {
    left: downReverse(),
    right: down(),
    top: left(),
    bottom: leftReverse(),
  },
  {
    left: downReverse(),
    right: down(),
    top: xReverse(),
    bottom: x(),
  },
  {
    left: downReverse(),
    right: down(),
    top: rightReverse(),
    bottom: right(),
  },
];

const shadowSidesGreen: ShadowAction[] = [
  {
    left: up(),
    right: upReverse(),
    top: leftReverse(),
    bottom: left(),
  },
  {
    left: up(),
    right: upReverse(),
    top: x(),
    bottom: xReverse(),
  },
  {
    left: up(),
    right: upReverse(),
    top: right(),
    bottom: rightReverse(),
  },
  {
    left: yReverse(),
    right: y(),
    top: leftReverse(),
    bottom: left(),
  },
  {
    left: yReverse(),
    right: y(),
    top: x(),
    bottom: xReverse(),
  },
  {
    left: yReverse(),
    right: y(),
    top: right(),
    bottom: rightReverse(),
  },
  {
    left: downReverse(),
    right: down(),
    top: leftReverse(),
    bottom: left(),
  },
  {
    left: downReverse(),
    right: down(),
    top: x(),
    bottom: xReverse(),
  },
  {
    left: downReverse(),
    right: down(),
    top: right(),
    bottom: rightReverse(),
  },
];

const shadowSidesWhite: ShadowAction[] = [
  {
    left: up(),
    right: upReverse(),
    top: front(),
    bottom: frontReverse(),
  },
  {
    left: up(),
    right: upReverse(),
    top: z(),
    bottom: zReverse(),
  },
  {
    left: up(),
    right: upReverse(),
    top: backReverse(),
    bottom: back(),
  },
  {
    left: yReverse(),
    right: y(),
    top: front(),
    bottom: frontReverse(),
  },
  {
    left: yReverse(),
    right: y(),
    top: z(),
    bottom: zReverse(),
  },
  {
    left: yReverse(),
    right: y(),
    top: backReverse(),
    bottom: back(),
  },
  {
    left: downReverse(),
    right: down(),
    top: front(),
    bottom: frontReverse(),
  },
  {
    left: downReverse(),
    right: down(),
    top: z(),
    bottom: zReverse(),
  },
  {
    left: downReverse(),
    right: down(),
    top: backReverse(),
    bottom: back(),
  },
];

const shadowSidesYellow: ShadowAction[] = [
  {
    left: up(),
    right: upReverse(),
    top: frontReverse(),
    bottom: front(),
  },
  {
    left: up(),
    right: upReverse(),
    top: zReverse(),
    bottom: z(),
  },
  {
    left: up(),
    right: upReverse(),
    top: back(),
    bottom: backReverse(),
  },
  {
    left: yReverse(),
    right: y(),
    top: frontReverse(),
    bottom: front(),
  },
  {
    left: yReverse(),
    right: y(),
    top: zReverse(),
    bottom: z(),
  },
  {
    left: yReverse(),
    right: y(),
    top: back(),
    bottom: backReverse(),
  },
  {
    left: downReverse(),
    right: down(),
    top: frontReverse(),
    bottom: front(),
  },
  {
    left: downReverse(),
    right: down(),
    top: zReverse(),
    bottom: z(),
  },
  {
    left: downReverse(),
    right: down(),
    top: back(),
    bottom: backReverse(),
  },
];

const shadowSidesOrange: ShadowAction[] = [
  {
    left: back(),
    right: backReverse(),
    top: left(),
    bottom: leftReverse(),
  },
  {
    left: back(),
    right: backReverse(),
    top: xReverse(),
    bottom: x(),
  },
  {
    left: back(),
    right: backReverse(),
    top: rightReverse(),
    bottom: right(),
  },
  {
    left: zReverse(),
    right: z(),
    top: left(),
    bottom: leftReverse(),
  },
  {
    left: zReverse(),
    right: z(),
    top: xReverse(),
    bottom: x(),
  },
  {
    left: zReverse(),
    right: z(),
    top: rightReverse(),
    bottom: right(),
  },
  {
    left: frontReverse(),
    right: front(),
    top: left(),
    bottom: leftReverse(),
  },
  {
    left: frontReverse(),
    right: front(),
    top: xReverse(),
    bottom: x(),
  },
  {
    left: frontReverse(),
    right: front(),
    top: rightReverse(),
    bottom: right(),
  },
];

const shadowSidesRed: ShadowAction[] = [
  {
    left: back(),
    right: backReverse(),
    top: leftReverse(),
    bottom: left(),
  },
  {
    left: back(),
    right: backReverse(),
    top: x(),
    bottom: xReverse(),
  },
  {
    left: back(),
    right: backReverse(),
    top: right(),
    bottom: rightReverse(),
  },
  {
    left: zReverse(),
    right: z(),
    top: leftReverse(),
    bottom: left(),
  },
  {
    left: zReverse(),
    right: z(),
    top: x(),
    bottom: xReverse(),
  },
  {
    left: zReverse(),
    right: z(),
    top: right(),
    bottom: rightReverse(),
  },
  {
    left: frontReverse(),
    right: front(),
    top: leftReverse(),
    bottom: left(),
  },
  {
    left: frontReverse(),
    right: front(),
    top: x(),
    bottom: xReverse(),
  },
  {
    left: frontReverse(),
    right: front(),
    top: right(),
    bottom: rightReverse(),
  },
];

export const rotates: Rotates[] = [
  { rotateX: 0, rotateY: 0, shadowAction: shadowSidesBlue },
  { rotateX: 0, rotateY: 0, shadowAction: shadowSidesGreen },
  { rotateY: 90, rotateX: 0, shadowAction: shadowSidesWhite },
  { rotateY: 90, rotateX: 0, shadowAction: shadowSidesYellow },
  { rotateX: 90, rotateY: 0, shadowAction: shadowSidesOrange },
  { rotateX: 90, rotateY: 0, shadowAction: shadowSidesRed },
];
