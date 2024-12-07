import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DegreeSide } from "../types";

const initialState: DegreeSide = {
  x: 45,
  y: -45,
};

const name: string = "coordinates";

const coordinatesSlice = createSlice({
  name,
  initialState,
  reducers: {
    updateCoordinatesX(state, action: PayloadAction<number>) {
      state.x = action.payload;
    },
    updateCoordinatesY(state, action: PayloadAction<number>) {
      state.y = action.payload;
    },
  },
});

export const { updateCoordinatesX, updateCoordinatesY } =
  coordinatesSlice.actions;

export default coordinatesSlice.reducer;
