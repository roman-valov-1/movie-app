import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMovie, ServerResponse } from "../types/movieApi.types";


export const movieApi = createApi({
   reducerPath: 'movieApi',
   baseQuery: fetchBaseQuery({ baseUrl: 'https://api.kinopoisk.dev/v1.4' }),
   endpoints: (builder) => ({
      searchMovieByName: builder.query<IMovie[], string>({
         query: (search: string) => ({
            url: `movie/search?`,
            headers: {
               'X-API-KEY': '35EFQCP-CBD4ADR-NYZCEJ4-395PRG6',
            },
            params: {
               page: 1,
               limit: 10,
               query: search
            }
         }),
         transformResponse: (response: ServerResponse) => response.docs 
      }),
   })
})

export const { useSearchMovieByNameQuery } = movieApi;