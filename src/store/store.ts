import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth.slice";
import { movieApi } from "./movie.api";


export const store = configureStore({
   reducer: {
      auth: authSlice, 
      [movieApi.reducerPath]: movieApi.reducer
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;