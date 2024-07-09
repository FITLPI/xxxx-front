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

export type PropsSide = {
  x: string;
  y: string;
  background: string;
};
