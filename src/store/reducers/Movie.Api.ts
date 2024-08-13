import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMovieByName } from "../../types/searchByName.types";
import { IMovieById } from "../../types/searchById.types";
import { ISearchParams } from "../../types/ISearchParams.types";
import { token } from "../api-constants";




export const movieApi = createApi({
   reducerPath: 'movieApi',
   baseQuery: fetchBaseQuery({ baseUrl: 'https://api.kinopoisk.dev/v1.4' }),
   endpoints: (builder) => ({
      searchMovieByName: builder.query<IMovieByName[], ISearchParams>({
         query: (searchParams: ISearchParams) => ({
            url: `movie/search?`,
            headers: {
               'X-API-KEY': token
            },
            params: {
               page: searchParams.page,
               limit: searchParams.limit,
               query: searchParams.search
            }
         })
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