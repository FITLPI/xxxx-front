import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { YandexIdResponse, YndexIdState } from "../types";
import { defaultYandexIdResponse } from "../helpers";

const initialState: YndexIdState = {
  yndexIdInfo: defaultYandexIdResponse,
};

const name: string = "yndex id";

const yandexIdSlice = createSlice({
  name,
  initialState,
  reducers: {
    updateInfo(state, action: PayloadAction<YandexIdResponse>) {
      state.yndexIdInfo = action.payload;
    },
  },
});

export const { updateInfo } = yandexIdSlice.actions;

export default yandexIdSlice.reducer;
