import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import filtersParamsSlice  from "./filtersParams/filtersParamsSlice";
import randomMovieSlice  from "./randomMovie/randomMovieSlice";
import { movieByName } from "./movieByName/movieByName";
import { movieById } from "./movieById/movieById";
import moviesByFiltersSlice from "./moviesByFilters/moviesByFiltersSlice";
import moviesByCollectionSlice from "./moviesByCollection/moviesByCollectionSlice";


export const store = configureStore({
   reducer: {
      auth: authSlice, 
      filtersParams: filtersParamsSlice,
      randomMovie: randomMovieSlice,
      moviesByFilters: moviesByFiltersSlice,
      [movieByName.reducerPath]: movieByName.reducer,
      [movieById.reducerPath]: movieById.reducer,
      moviesByCollection: moviesByCollectionSlice
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
      movieByName.middleware, movieById.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;