import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMovieById } from "./movieById.types";
import { baseURL, token } from "../api-constants";




export const movieById = createApi({
   reducerPath: 'MovieById',
   baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
   endpoints: (builder) => ({
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

export const { useSearchMovieByIdQuery } = movieById;