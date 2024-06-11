import { configureStore } from "@reduxjs/toolkit";
import accessTokenSlice from "./accessTokenSlice";

const store = configureStore({
  reducer: {
    accessToken: accessTokenSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;
