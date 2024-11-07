import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL, token } from "../api-constants";

export const fetchRandomMovie = createAsyncThunk(
   'randomMovie',
   async (paramsData, { rejectWithValue }) => {

      const options = {
         method: 'GET',
         headers: {
            accept: 'application/json',
            'X-API-KEY': token
         }
      };

      const params = new URLSearchParams({
         'genres.name': paramsData.genres,
         'countries.name': paramsData.countries,
         year: paramsData.year,
         notNullFields: 'id'
      }).toString();

      try {
         const response = await fetch(`${baseURL}/movie/random?${params}`, options);
         const data = await response.json();

         if (data) return data;
         if (data === null) throw new Error('Фильм не найден');
      } catch (e) {
         return rejectWithValue(e.message);
      }
   }
)