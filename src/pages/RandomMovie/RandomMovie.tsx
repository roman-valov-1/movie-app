import { BaseSyntheticEvent, useState } from "react";
import styles from './RandomMovie.module.css';
import { fetchRandomMovie } from '../../store/randomMovie/fetchRandomMovie';
import MovieCard from "../../components/MovieCard/MovieCard";
import FiltersBlock from "../../components/FiltersBlock/FiltersBlock";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { IFiltersParams } from "../../models/IFiltersParams";
import { useAuthCheck } from "../../hooks/useAuthCheck";



function RandomMovie() {

   useAuthCheck();

   const [searchParams, setSearchParams] = useState<IFiltersParams>({
      genres: '',
      countries: '',
      year: ''
   });

   const dispatch = useAppDispatch();

   const {
      movie,
      isLoading:
      isLoadingMovie,
      error
   } = useAppSelector(state => state.randomMovie);


   const onSubmit = (e: BaseSyntheticEvent) => {
      e.preventDefault();
      dispatch(fetchRandomMovie(searchParams));
   }

   return (
      <div className="container" >
         <h1 className="h1">Find random movie</h1>
         <div className={styles["random"]}>
            <aside className={styles["random__aside"]}>
               <FiltersBlock
                  setSearchParams={setSearchParams}
                  onSubmit={onSubmit}
               />
            </aside>
            <section className={styles["random__content"]}>
               <h2>Results</h2>
               <>
                  {isLoadingMovie && <p>Loading Movie</p>}
                  {error && <p>{error}</p>}
                  {movie && <MovieCard
                     key={movie.id}
                     data={movie}
                  />
                  }
               </>
            </section>
         </div>
      </div >
   )
}

export default RandomMovie;