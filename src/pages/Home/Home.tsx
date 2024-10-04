
import { BaseSyntheticEvent, MouseEvent, useEffect, useState } from "react";
import FiltersBlock from "../../components/FiltersBlock/FiltersBlock";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { IFiltersParams } from "../../models/IFiltersParams";
import styles from './Home.module.css';
import MovieList from "../../components/MovieList/MovieList";
import { useAppSelector } from "../../hooks/useAppSelector";
import { fetchMoviesByFilters } from "../../store/homePage/fetchMovieByFilters";
import { fetchMoviesByCollection } from "../../store/homePage/fetchMoviesByCollection";
import { homePageActions } from "../../store/homePage/homePageSlice";
import { IPaginationParams } from "../../models/IPaginationParams";


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


   const dispatch = useAppDispatch();

   const {
      isLoading,
      error,
      movies,
      collectionsNames,
      currentQuery,
      page: homePagePage,
      limit: homePageLimit,
      pages
   } = useAppSelector(s => s.homePage);

   const onCollectionButtonClick = (e: MouseEvent) => {
      dispatch(fetchMoviesByCollection({
         page: 1,
         limit: paginationParams.limit,
         collectionName: e.target.name,
      }))
   };

   const onFiltersSubmit = (e: BaseSyntheticEvent) => {
      e.preventDefault();
      dispatch(fetchMoviesByFilters({
         page: 1,
         limit: paginationParams.limit,
         ...searchParams
      }));
   };

   useEffect(() => {
      dispatch(fetchMoviesByCollection({
         ...paginationParams,
         collectionName: currentQuery,
      }))

      return () => {
         dispatch(homePageActions.clearState());
      }
   }, [])

   useEffect(() => {
      if (collectionsNames.find((i) => i == currentQuery)) {
         dispatch(fetchMoviesByCollection({
            ...paginationParams,
            collectionName: currentQuery,
         }))
      } else {
         dispatch(fetchMoviesByFilters({
            ...searchParams,
            ...paginationParams
         }));
      }
   }, [paginationParams])

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
                        disabled={i === currentQuery}
                        key={i}>
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
               {isLoading && <div>Loading...</div>}
               {error && <div>{error}</div>}
               {movies && <MovieList
                  movies={movies}
                  currentPage={homePagePage}
                  maxPage={pages}
                  quantity={homePageLimit}
                  changePaginationParams={setPaginationParams}
               />
               }
            </section>
         </div>
      </div >
   )
}

export default Home;