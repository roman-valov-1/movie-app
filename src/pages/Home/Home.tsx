
import { BaseSyntheticEvent, useEffect, useState } from "react";
import FiltersBlock from "../../components/FiltersBlock/FiltersBlock";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { IFiltersParams } from "../../models/IFiltersParams";
import styles from './Home.module.css';
import { useAppSelector } from "../../hooks/useAppSelector";
import { fetchMoviesByFilters } from "../../store/moviesByFilters/fetchMovieByFilters";
import MovieList from "../../components/MovieList/MovieList";
import MovieCard from "../../components/MovieCard/MovieCard";
import PaginationBlock from "../../components/PaginationBlock/PaginationBlock";
import { moviesByFiltersActions } from "../../store/moviesByFilters/moviesByFiltersSlice";

interface IPaginationParams {
   page: number;
   limit: number;
}

function Home() {

   const [searchParams, setSearchParams] = useState<IFiltersParams>({
      genres: '',
      countries: '',
      year: ''
   });

   const [paginationParams, setPaginationParams] = useState<IPaginationParams>({
      page: 1,
      limit: 10
   });

   const {
      isLoading,
      error,
      movies,
      statePage,
      stateLimit,
      statePages
   } = useAppSelector(s => s.moviesByFilters);

   const dispatch = useAppDispatch();

   const onSubmit = (e: BaseSyntheticEvent) => {
      e.preventDefault();
      dispatch(fetchMoviesByFilters({
         page: 1,
         limit: paginationParams.limit,
         ...searchParams
      }));
   };

   useEffect(() => {
      if (searchParams.genres && searchParams.countries && searchParams.year) {
         dispatch(fetchMoviesByFilters({
            ...paginationParams,
            ...searchParams
         }));
      }
   }, [paginationParams])

   useEffect(() => {

      return () => {
         dispatch(moviesByFiltersActions.clearResults());
      }

   }, [])


   return (
      <div className="container" >
         <h1 className="h1">Movies</h1>
         <div className={styles["home"]}>
            <aside className={styles["home__aside"]}>
               <FiltersBlock
                  setSearchParams={setSearchParams}
                  onSubmit={onSubmit}
               />
            </aside>
            <section className={styles["home__content"]}>
               <h2>Results</h2>
               {isLoading && <div>Loading...</div>}
               {error && <div>{error}</div>}

               <MovieList>
                  {movies && <PaginationBlock
                     currentPage={statePage}
                     maxPage={statePages}
                     quantity={stateLimit}
                     changePaginationParams={setPaginationParams}
                  >
                     {movies.map(movie => (
                        <MovieCard
                           key={movie.id}
                           id={movie.id}
                           imageUrl={movie.poster.url}
                           name={movie.name ?? movie.names[0]?.name}
                           genres={movie.genres}
                           countries={movie.countries}
                           description={movie.shortDescription}
                        />
                     ))}

                  </PaginationBlock>
                  }
               </MovieList>
            </section>
         </div>
      </div >
   )
}

export default Home;