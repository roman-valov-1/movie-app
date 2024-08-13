import { createAsyncThunk } from "@reduxjs/toolkit";
import { token } from "../api-constants";

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

      const getRandomMovie = async () => {
         const response = await fetch(`https://api.kinopoisk.dev/v1.4/movie/random?${params}`, options);
         const data = response.json();
         return data;
      }

      try {
         return getRandomMovie();
      } catch (e) {
         return rejectWithValue('Error');
      }
   }
)