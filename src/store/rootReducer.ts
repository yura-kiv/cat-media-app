import { combineReducers } from "@reduxjs/toolkit";
import gallerySlice from "./slices/gallerySlice";
import breedSlice from "./slices/breedSlice";
import userLogsSlice from "./slices/userLogsSlice";
import { catApiQuery } from "./api/catApi";

export const rootReducer = combineReducers({
  gallerySlice,
  breedSlice,
  userLogsSlice,
  [catApiQuery.reducerPath]: catApiQuery.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
