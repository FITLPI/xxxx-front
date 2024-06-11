import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AccessTokenState } from "../types";

const initialState: AccessTokenState = {
  accessToken: "",
};

const name: string = "access token";

const accessTokenSlice = createSlice({
  name,
  initialState,
  reducers: {
    updateToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
    },
  },
});

export const { updateToken } = accessTokenSlice.actions;

export default accessTokenSlice.reducer;
