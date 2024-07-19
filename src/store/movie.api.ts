import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMovieByName, ServerResponse } from "../types/searchByName.types";
import { IMovieById } from "../types/searchById.types";

const token = '35EFQCP-CBD4ADR-NYZCEJ4-395PRG6';


export const movieApi = createApi({
   reducerPath: 'movieApi',
   baseQuery: fetchBaseQuery({ baseUrl: 'https://api.kinopoisk.dev/v1.4' }),
   endpoints: (builder) => ({
      searchMovieByName: builder.query<IMovieByName[], string>({
         query: (name: string) => ({
            url: `movie/search?`,
            headers: {
               'X-API-KEY': token
            },
            params: {
               page: 1,
               limit: 10,
               query: name
            }
         }),
         transformResponse: (response: ServerResponse) => response.docs 
      }),
      searchMovieById: builder.query<IMovieById, string>({
         query: (id: string) => ({
            url: `movie/${id}`,
            headers: {
               'X-API-KEY': token
            }
         })
      })
   })
})

export const { 
   useSearchMovieByNameQuery, 
   useSearchMovieByIdQuery } = movieApi;