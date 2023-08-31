import { combineReducers } from "@reduxjs/toolkit";
import gallerySlice from "./slices/gallerySlice";
import { catApiQuery } from "./api/catApi";

export const rootReducer = combineReducers({
  gallerySlice,
  [catApiQuery.reducerPath]: catApiQuery.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
