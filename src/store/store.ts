import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import filtersParamsSlice  from "./filtersParams/filtersParamsSlice";
import { movieApi } from "./MovieApi/Movie.Api";
import randomMovieSlice  from "./randomMovie/randomMovieSlice";


export const store = configureStore({
   reducer: {
      auth: authSlice, 
      filtersParams: filtersParamsSlice,
      randomMovie: randomMovieSlice,
      [movieApi.reducerPath]: movieApi.reducer,
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;