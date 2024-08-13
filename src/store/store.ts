import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/auth.Slice";
import filtersParamsSlice  from "./reducers/filtersParams.Slice";
import { movieApi } from "./reducers/Movie.Api";
import randomMovieSlice  from "./reducers/randomMovie";


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