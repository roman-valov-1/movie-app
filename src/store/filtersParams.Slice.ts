import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchFiltersParams } from "./ActionCreators";

interface IfiltersState {
   genres: string[];
   countries: string[];
   years: string[];
   isLoading: boolean;
   error: string;
}

interface IFiltersData {
   countries: string[];
   genres: string[];
}

const initialState: IfiltersState = {
   genres: [],
   countries: [],
   years: [
      '2021-2024',
      '2011-2020',
      '2001-2010',
      '1991-2000',
      '1981-1990',
      '1971-1980'
   ],
   isLoading: false,
   error: ''
}


export const filtersParamsSlice = createSlice({
   name: 'filtersParams',
   initialState,
   reducers: {},
   extraReducers: builder => {
      builder
         .addCase(fetchFiltersParams.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(fetchFiltersParams.fulfilled, (state, action: PayloadAction<IFiltersData>) => {
            state.isLoading = false;
            state.error = '';
            state.genres = action.payload.genres;
            state.countries = action.payload.countries;
         })
         .addCase(fetchFiltersParams.rejected, (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
         })
   }
})

export default filtersParamsSlice.reducer;
export const filtersParamsActions = filtersParamsSlice.actions;