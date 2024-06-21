import { YandexIdResponse } from "../types";

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
