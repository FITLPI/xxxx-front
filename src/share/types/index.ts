export type AccessTokenState = {
  accessToken: string;
};

export type YndexIdState = {
  yndexIdInfo: YandexIdResponse;
};

export type YandexIdResponse = {
  id: string;
  login: string;
  client_id: number;
  display_name: string;
  real_name: string;
  first_name: string;
  last_name: string;
  sex: string;
  default_email: string;
  emails: Array<string>;
  birthday: string;
  default_avatar_id: string;
  is_avatar_empty: boolean;
  default_phone: {
    id: number;
    number: string;
  };
  psuid: string;
};

export type DegreeSide = {
  x: number;
  y: number;
  blindSpot?: {
    left: number;
    right: number;
    top: number;
    bottom: number;
  };
};
export type DataSide = {
  degreeSide: DegreeSide;
  blindSpot?: {
    ruleX: (e: number) => boolean; //x
    ruleY: (e: number) => boolean; //y
  };
  color: string;
};

export type Viewport = {
  width: number;
  height: number;
};

export interface IBaseComponent {
  style?: CSSProperties;
  children?: React.ReactNode;
}

import { CSSProperties } from "styled-components";

export interface IAaction<T> {
  type?:
    | "U"
    | "!U"
    | "D"
    | "!D"
    | "F"
    | "!F"
    | "B"
    | "!B"
    | "L"
    | "!L"
    | "R"
    | "!R"
    | "Z"
    | "!Z"
    | "Y"
    | "!Y"
    | "X"
    | "!X";
  payload: T;
}

export type SideProperty = {
  id: number;
  style?: CSSProperties;
  position: string;
};

export interface SideInfo {
  name: string;
  color: string;
}

export type TransformMatrix = number[][];

export type Cell = {
  id: number;
  x: number;
  y: number;
  z: number;
  initialX: number;
  initialY: number;
  initialZ: number;
  rotates: TransformMatrix;
  map: Record<any, number>;
  sides: SideInfo[];
};

export interface IInitialState {
  dispatch: React.Dispatch<IAaction<any>>;
  state: Cell[];
}

export type Rotates = {
  rotateX: number;
  rotateY: number;
  shadowAction: ShadowAction[];
};

export interface ShadowAction {
  left: IAaction<any>;
  right: IAaction<any>;
  top: IAaction<any>;
  bottom: IAaction<any>;
}
