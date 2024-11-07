import {  createAsyncThunk } from "@reduxjs/toolkit";
import { token } from "../api-constants";

export const fetchFiltersParams = createAsyncThunk(
   'filtersParams',
   async (data, {rejectWithValue}) => {
      const options = {
         method: 'GET',
         headers: { accept: 'application/json', 'X-API-KEY': token }
      };

      const getCountries = async () => {
         const response = await fetch('https://api.kinopoisk.dev/v1/movie/possible-values-by-field?field=countries.name', options)
         const data = response.json();
         return data;
      }

      const getGenres = async () => {
         const response = await fetch('https://api.kinopoisk.dev/v1/movie/possible-values-by-field?field=genres.name', options)
         const data = response.json();
         return data;
      }

      try {
         const results = await Promise.all([
            getCountries(),
            getGenres()
         ])

         return {
            countries: results[0].map(item => item.name),
            genres: results[1].map(item => item.name),
         }

      } catch (e) {
         return rejectWithValue("Что-то пошло не так")
      }
   }
)