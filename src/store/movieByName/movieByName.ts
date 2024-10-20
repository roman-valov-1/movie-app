import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMovieByName } from "./movieByName.types";
import { baseURL, token } from "../api-constants";
import { ISearchParams } from "../../models/ISearchParams";




export const movieByName = createApi({
   reducerPath: 'MovieByName',
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
               query: searchParams.text
            }
         })
      })
   })
})

export const { useSearchMovieByNameQuery } = movieByName;