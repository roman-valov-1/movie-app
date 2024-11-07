import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IHomePageState } from "./homePage.types";
import { fetchMoviesByCollection } from "./fetchMoviesByCollection";
import { fetchMoviesByFilters } from "./fetchMovieByFilters";

const initialState: IHomePageState = {
   movies: '',
   collectionsNames: [
      'popular-films',
      'top250',
      'top500'
   ],
   currentQuery: 'popular-films',
   page: 1,
   limit: 10,
   pages: null,
   isLoading: false,
   error: ''
};

export const homePageSlice = createSlice({
   name: 'homePage',
   initialState,
   reducers: {
      clearState(state) {
         state.movies = '',
         state.currentQuery= 'popular-films',
         state.page = 1,
         state.limit = 10,
         state.pages = null,
         state.isLoading = false,
         state.error = ''
      }
   },
   extraReducers: builder => {
      builder.addCase(fetchMoviesByCollection.pending, (state) => {
         state.isLoading = true;
         state.error = '';
      })
      builder.addCase(fetchMoviesByCollection.fulfilled, (state, action: PayloadAction<any>) => {
         state.isLoading = false;
         state.error = '';
         state.movies = action.payload.docs;
         state.currentQuery = action.payload.query;
         state.page = action.payload.page;
         state.limit = action.payload.limit;
         state.pages = action.payload.pages;
         
      })
      builder.addCase(fetchMoviesByCollection.rejected, (state, action: PayloadAction<string>) => {
         state.isLoading = false;
         state.error = action.payload
      })
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
         state.currentQuery = action.payload.query;
      })
      builder.addCase(fetchMoviesByFilters.rejected, (state, action: PayloadAction<string>) => {
         state.isLoading = false;
         state.error = action.payload;
      })
   }
});

export default homePageSlice.reducer;
export const homePageActions = homePageSlice.actions;
