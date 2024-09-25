import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMoviesByFiltersState } from "./moviesByFilters.types";
import { fetchMoviesByFilters } from "./fetchMovieByFilters";


const initialState: IMoviesByFiltersState = {
   movies: '',
   page: 1,
   limit: 10,
   pages: null,
   isLoading: false,
   error: ''
}

export const moviesByFiltersSlice = createSlice({
   name: 'moviesByFilters',
   initialState,
   reducers: {
      clearState(state) {
         state.movies = '';
         state.page = 1;
         state.limit = 10;
         state.pages = null;
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
         state.page = action.payload.page;
         state.limit = action.payload.limit;
         state.pages = action.payload.pages;
      })
      builder.addCase(fetchMoviesByFilters.rejected, (state, action: PayloadAction<string>) => {
         state.isLoading = false;
         state.error = action.payload;
      })
   }
})

export default moviesByFiltersSlice.reducer;
export const moviesByFiltersActions = moviesByFiltersSlice.actions;