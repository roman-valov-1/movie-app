import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMovieByName } from "./searchByName.types";
import { IMovieById } from "./searchById.types";
import { ISearchParams } from "./ISearchParams.types";
import { baseURL, token } from "../api-constants";




export const movieApi = createApi({
   reducerPath: 'movieApi',
   baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
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