import { configureStore } from "@reduxjs/toolkit";
import estateReducer from "./estateSlice";

export const store = configureStore({
  reducer: estateReducer,
});