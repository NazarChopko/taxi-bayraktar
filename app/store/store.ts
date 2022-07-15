import { combineReducers, configureStore } from "@reduxjs/toolkit";
import taxiSlice from "./slice";

const rootReducer = combineReducers({
  taxiReducer: taxiSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type TypeRootState = ReturnType<typeof rootReducer>;
