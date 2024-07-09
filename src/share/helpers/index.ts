import { PropsSide, YandexIdResponse } from "../types";

const defaultString = "default";
const defaultId = -1;

export const defaultYandexIdResponse: YandexIdResponse = {
  id: defaultString,
  login: defaultString,
  client_id: defaultId,
  display_name: defaultString,
  real_name: defaultString,
  first_name: defaultString,
  last_name: defaultString,
  sex: defaultString,
  default_email: defaultString,
  emails: [defaultString],
  birthday: defaultString,
  default_avatar_id: defaultString,
  is_avatar_empty: false,
  default_phone: {
    id: defaultId,
    number: defaultString,
  },
  psuid: defaultString,
};

export const culcWithCoef = (value: string, coef: number): number => {
  const result = parseInt(value) * coef;
  return result;
};

export const getUtils = (value: string): string => {
  const utils = value
    .split("")
    .filter((char) => !Boolean(parseInt(char)))
    .join("");
  return utils;
};

export const propsSide: Array<PropsSide> = [
  {
    y: "0",
    x: "0",
    background: "white",
  },
  {
    y: "-90",
    x: "0",
    background: "blue",
  },
  {
    y: "-180",
    x: "0",
    background: "yellow",
  },
  {
    y: "-270",
    x: "0",
    background: "green",
  },
  {
    y: "0",
    x: "90",
    background: "red",
  },
  {
    y: "0",
    x: "-90",
    background: "orange",
  },
];
