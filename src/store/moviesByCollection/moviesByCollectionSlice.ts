import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMoviesByCollectionState } from "./moviesByCollection.types";
import { fetchMoviesByCollection } from "./fetchMoviesByCollection";

const initialState: IMoviesByCollectionState = {
   movies: '',
   collectionsNames: [
      'popular-films',
      'top250',
      'top500'
   ],
   currentCollection: '',
   page: 1,
   limit: 10,
   pages: null,
   isLoading: false,
   error: ''
};

export const moviesByCollectionSlice = createSlice({
   name: 'moviesByCollection',
   initialState,
   reducers: {
      clearState(state) {
         state.movies = '',
         state.currentCollection = '',
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
         state.currentCollection = action.payload.collectionName;
         state.page = action.payload.page;
         state.limit = action.payload.limit;
         state.pages = action.payload.pages;
      })
      builder.addCase(fetchMoviesByCollection.rejected, (state, action: PayloadAction<string>) => {
         state.isLoading = false;
         state.error = action.payload
      })
   }
});

export default moviesByCollectionSlice.reducer;
export const moviesByCollectionActions = moviesByCollectionSlice.actions;
