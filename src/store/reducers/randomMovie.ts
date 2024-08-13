import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchRandomMovie } from "../action-creators/fetchRandomMovie";

type genre = {
   name: string;
}

type country = {
   name: string;
}

interface ImovieResponse {
   id: number;
   imageUrl?: string;
   name: string;
   genres?: genre[];
   countries?: country[];
   description?: string;
}

interface IrandomMovieState {
   movie: ImovieResponse | string;
   isLoading: boolean;
   error: string;
}

const initialState: IrandomMovieState = {
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
      builder.addCase(fetchRandomMovie.fulfilled, (state, action: PayloadAction<ImovieResponse>) => {
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