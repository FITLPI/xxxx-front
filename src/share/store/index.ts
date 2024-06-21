import { configureStore } from "@reduxjs/toolkit";
import accessTokenSlice from "./accessTokenSlice";
import yandexIdSlice from "./YandexIDSlice";

const store = configureStore({
  reducer: {
    accessToken: accessTokenSlice,
    yndexIdInfo: yandexIdSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;
