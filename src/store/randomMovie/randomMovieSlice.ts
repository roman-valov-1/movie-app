import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchRandomMovie } from "./fetchRandomMovie";
import { IMovieResponse, IRandomMovieState } from "./randomMovie.types";


const initialState: IRandomMovieState = {
   movie: '',
   isLoading: false,
   error: ''
}


export const randomMovieSlice = createSlice({
   name: 'randomMovie',
   initialState,
   reducers: {},
   extraReducers: builder => {
      builder.addCase(fetchRandomMovie.pending, (state) => {
         state.isLoading = true;
      })
      builder.addCase(fetchRandomMovie.fulfilled, (state, action: PayloadAction<IMovieResponse>) => {
         state.isLoading = false;
         state.error = '';
         state.movie = action.payload;
      })
      builder.addCase(fetchRandomMovie.rejected, (state, action: PayloadAction<string>) => {
         state.isLoading = false;
         state.error = action.payload;
      })
   }
})

export default randomMovieSlice.reducer;
export const randomMovieSliceActions = randomMovieSlice.actions;