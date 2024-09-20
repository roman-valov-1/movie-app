import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL, token } from "../api-constants";


export const fetchMoviesByFilters = createAsyncThunk(
   'moviesByFilters',
   async (queryParams, { rejectWithValue }) => {
      const options = {
         method: 'GET',
         headers: {
            accept: 'application/json',
            'X-API-KEY': token
         }
      };
      
      const params = new URLSearchParams({
         page: queryParams.page,
         limit: queryParams.limit,
         'genres.name': queryParams.genres,
         'countries.name': queryParams.countries,
         year: queryParams.year,
         notNullFields: 'id'
      }).toString();

      try {
         const response = await fetch(`${baseURL}/movie?${params}`, options);
         const data = await response.json();
         return data;

      } catch (e) {
         return rejectWithValue(e.message);
      }
   }
)