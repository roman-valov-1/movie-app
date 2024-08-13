import { BaseSyntheticEvent, useState } from "react";
import styles from './RandomMovie.module.css';
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchRandomMovie } from '../../store/action-creators/fetchRandomMovie';
import MovieCard from "../../components/MovieCard/MovieCard";
import FiltersBlock from "../../components/FiltersBlock/FiltersBlock";



function RandomMovie() {

   interface ISearchParams {
      genres: string;
      countries: string;
      year: string;
   }

   const dispatch = useAppDispatch();

   const {
      movie,
      isLoading:
      isLoadingMovie,
      error
   } = useAppSelector(state => state.randomMovie);

   const [searchParams, setSearchParams] = useState<ISearchParams>({
      genres: '',
      countries: '',
      year: ''
   });


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
                  {movie == null && <p>Фильм не найден</p>}
                  {movie && <MovieCard
                     id={movie?.id}
                     imageUrl={movie?.poster?.url}
                     name={movie?.name}
                     genres={movie?.genres}
                     countries={movie?.countries}
                     description={movie?.shortDescription}
                  />
                  }
               </>
            </section>
         </div>
      </div >
   )
}

export default RandomMovie;