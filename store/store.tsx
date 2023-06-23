import { configureStore } from "@reduxjs/toolkit";
import newsData from "./features/Slice";

export const store = configureStore({
  reducer: newsData,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
