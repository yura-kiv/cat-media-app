import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { catApiQuery } from "./api/catApi";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(catApiQuery.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
