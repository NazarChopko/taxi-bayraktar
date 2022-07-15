import { createSlice } from "@reduxjs/toolkit";
import { TypeInitialState, TypeFrom } from "./type";

const initialState: TypeInitialState = {
  from: {} as TypeFrom,
  to: {} as TypeFrom,
  travelTime: 0,
  travelDistance: 0,
  selectedOptions: "",
};

export const taxiSlice = createSlice({
  name: "taxi",
  initialState,
  reducers: {
    setFrom: (state, action) => {
      state.from = action.payload;
    },
    setTo: (state, action) => {
      state.to = action.payload;
    },
    setTravelTime: (state, action) => {
      state.travelTime = action.payload;
    },
    setOptions: (state, action) => {
      state.selectedOptions = action.payload;
    },
    setTravelDistance: (state, action) => {
      state.travelDistance = action.payload;
    },
  },
});

export default taxiSlice.reducer;
