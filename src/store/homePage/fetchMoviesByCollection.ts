import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL, token } from "../api-constants";


export const fetchMoviesByCollection = createAsyncThunk (
   'moviesByCollection',
   async (queryParams, {rejectWithValue}) => {

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
         lists: queryParams.collectionName,
         sortField: 'rating.kp',
         sortType: '-1',
         notNullFields: 'id'
      }).toString();

      try {
         const response = await fetch(`${baseURL}/movie?${params}`, options);
         const data = await response.json();
         
         return {
            query: queryParams.collectionName,
            ...data,
         };

      } catch (e) {
         return rejectWithValue(e.message);
      }
   }
)