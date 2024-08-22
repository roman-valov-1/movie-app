
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

interface IPaginationParams {
   pageParameter: number;
   limitParameter: number;
}

function Home() {

   const [searchParams, setSearchParams] = useState<IFiltersParams>({
      genres: '',
      countries: '',
      year: ''
   });

   const [paginationParams, setPaginationParams] = useState<IPaginationParams>({
      pageParameter: 1,
      limitParameter: 10
   });

   const {
      isLoading,
      error,
      movies,
      page,
      limit,
      pages
   } = useAppSelector(s => s.moviesByFilters);

   const dispatch = useAppDispatch();

   const onSubmit = (e: BaseSyntheticEvent) => {
      e.preventDefault();
      dispatch(fetchMoviesByFilters({
         page: 1,
         limit: paginationParams.limitParameter,
         ...searchParams
      }));
   };

   useEffect(() => {
      console.log(22)
   }, [paginationParams])

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
                     currentPage={page}
                     maxPage={pages}
                     quantity={limit}
                     changePaginationParams={setPaginationParams}
                  >
                     {movies.map(movie => (
                        <MovieCard
                           key={movie.id}
                           id={movie.id}
                           imageUrl={movie.poster.url}
                           name={movie.name ?? movie.names[0].name}
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