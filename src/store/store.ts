import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth.Slice";
import filtersParamsSlice  from "./filtersParams.Slice";
import { movieApi } from "./Movie.Api";


export const store = configureStore({
   reducer: {
      auth: authSlice, 
      filtersParams: filtersParamsSlice,
      [movieApi.reducerPath]: movieApi.reducer,
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;