import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMoviesByFiltersState } from "./moviesByFilters.types";
import { fetchMoviesByFilters } from "./fetchMovieByFilters";


const initialState: IMoviesByFiltersState = {
   movies: '',
   statePage: 1,
   stateLimit: 10,
   statePages: null,
   isLoading: false,
   error: ''
}

export const moviesByFiltersSlice = createSlice({
   name: 'moviesByFilters',
   initialState,
   reducers: {
      clearResults(state) {
         state.movies = '';
         state.statePage = 1;
         state.stateLimit = 10;
         state.statePages = null;
         state.isLoading = false;
         state.error = '';
      }
   },
   extraReducers: builder => {
      builder.addCase(fetchMoviesByFilters.pending, (state) => {
         state.isLoading = true;
         state.error = '';
      })
      builder.addCase(fetchMoviesByFilters.fulfilled, (state, action: PayloadAction<any>) => {
         state.isLoading = false;
         state.error = '';
         state.movies = action.payload.docs;
         state.statePage = action.payload.page;
         state.stateLimit = action.payload.limit;
         state.statePages = action.payload.pages;
      })
      builder.addCase(fetchMoviesByFilters.rejected, (state, action: PayloadAction<string>) => {
         state.isLoading = false;
         state.error = action.payload;
      })
   }
})

export default moviesByFiltersSlice.reducer;
export const moviesByFiltersActions = moviesByFiltersSlice.actions;