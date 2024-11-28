import { configureStore } from "@reduxjs/toolkit";
import accessTokenSlice from "./accessTokenSlice";
import yandexIdSlice from "./yandexIDSlice";
import coordinatesSlice from "./coordinatesSlice";

const store = configureStore({
  reducer: {
    accessToken: accessTokenSlice,
    yndexIdInfo: yandexIdSlice,
    coordinates: coordinatesSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;
