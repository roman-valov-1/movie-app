
import { BaseSyntheticEvent, MouseEvent, useEffect, useState } from "react";
import FiltersBlock from "../../components/FiltersBlock/FiltersBlock";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { IFiltersParams } from "../../models/IFiltersParams";
import styles from './Home.module.css';
import { useAppSelector } from "../../hooks/useAppSelector";
import { fetchMoviesByFilters } from "../../store/moviesByFilters/fetchMovieByFilters";
import MovieList from "../../components/MovieList/MovieList";
import { moviesByFiltersActions } from "../../store/moviesByFilters/moviesByFiltersSlice";
import { IPaginationParams } from "../../models/IPaginationParams";
import { fetchMoviesByCollection } from "../../store/moviesByCollection/fetchMoviesByCollection";
import { moviesByCollectionActions } from "../../store/moviesByCollection/moviesByCollectionSlice";


function Home() {

   const [searchParams, setSearchParams] = useState<IFiltersParams>({
      genres: '',
      countries: '',
      year: ''
   });

   const [byFiltersPaginationParams, setByFiltersPaginationParams] = useState<IPaginationParams>({
      page: 1,
      limit: 10
   });

   const [byCollectionPaginationParams, setByCollectionPaginationParams] = useState<IPaginationParams>({
      page: 1,
      limit: 10
   });

   const dispatch = useAppDispatch();

   const {
      isLoading: moviesByFiltersIsLoading,
      error: moviesByFiltersError,
      movies: moviesByFiltersList,
      page: moviesByFiltersPage,
      limit: moviesByFiltersLimit,
      pages: moviesByFiltersPages
   } = useAppSelector(s => s.moviesByFilters);

   const {
      isLoading: moviesByCollectionIsLoading,
      error: moviesByCollectionError,
      movies: moviesByCollectionList,
      collectionsNames,
      currentCollection,
      page: moviesByCollectionPage,
      limit: moviesByCollectionLimit,
      pages: moviesByCollectionPages
   } = useAppSelector(s => s.moviesByCollection);

   const onCollectionButtonClick = (e: MouseEvent) => {
      dispatch(moviesByFiltersActions.clearState());
      dispatch(fetchMoviesByCollection({
         page: 1,
         limit: 10,
         collectionName: e.target.name,
      }))
   };

   const onFiltersSubmit = (e: BaseSyntheticEvent) => {
      e.preventDefault();
      dispatch(moviesByCollectionActions.clearState());
      dispatch(fetchMoviesByFilters({
         page: 1,
         limit: byFiltersPaginationParams.limit,
         ...searchParams
      }));
   };

   useEffect(() => {
      if (searchParams.genres && searchParams.countries && searchParams.year) {
         dispatch(fetchMoviesByFilters({
            ...byFiltersPaginationParams,
            ...searchParams
         }));
      }
   }, [byFiltersPaginationParams])

   useEffect(() => {
      if (currentCollection) {
         dispatch(fetchMoviesByCollection({
            collectionName: currentCollection,
            ...byCollectionPaginationParams,
         }))
      }
   }, [byCollectionPaginationParams])

   useEffect(() => {
      dispatch(fetchMoviesByCollection({
         page: 1,
         limit: 10,
         collectionName: collectionsNames[0],
      }))

      return () => {
         dispatch(moviesByFiltersActions.clearState());
         dispatch(moviesByCollectionActions.clearState());
      }
   }, [])

   return (
      <div className="container" >
         <h1 className="h1">Movies</h1>
         <div className={styles["home"]}>
            <aside className={styles["home__aside"]}>
               <div>
                  {collectionsNames.map(i => (
                     <button
                        className={styles["home__collection-button"]}
                        name={i}
                        onClick={onCollectionButtonClick}
                        disabled={i === currentCollection}>
                        {i}
                     </button>
                  ))}
               </div>
               <FiltersBlock
                  setSearchParams={setSearchParams}
                  onSubmit={onFiltersSubmit}
               />
            </aside>
            <section className={styles["home__content"]}>
               <h2>Results</h2>
               {moviesByFiltersIsLoading && <div>Loading...</div>}
               {moviesByFiltersError && <div>{moviesByFiltersError}</div>}
               {moviesByFiltersList && <MovieList
                  movies={moviesByFiltersList}
                  currentPage={moviesByFiltersPage}
                  maxPage={moviesByFiltersPages}
                  quantity={moviesByFiltersLimit}
                  changePaginationParams={setByFiltersPaginationParams}
               />
               }

               {moviesByCollectionIsLoading && <div>Loading...</div>}
               {moviesByCollectionError && <div>{moviesByCollectionError}</div>}
               {moviesByCollectionList && <MovieList
                  movies={moviesByCollectionList}
                  currentPage={moviesByCollectionPage}
                  maxPage={moviesByCollectionPages}
                  quantity={moviesByCollectionLimit}
                  changePaginationParams={setByCollectionPaginationParams}
               />
               }
            </section>
         </div>
      </div >
   )
}

export default Home;