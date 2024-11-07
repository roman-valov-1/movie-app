
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
import Loading from "../../components/Loading/Loading";


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
               <div className={styles["home__collections"]}>
                  <h2>
                     Поиск по подборкам
                  </h2>
                  <div className={styles["home__collections-buttons"]}>
                     {collectionsNames.map(i => (
                        <button
                           className={styles["home__collections-item"]}
                           name={i}
                           onClick={onCollectionButtonClick}
                           disabled={i === currentQuery}
                           key={i}>
                           {i}
                        </button>
                     ))}
                  </div>
               </div>
               <FiltersBlock
                  setSearchParams={setSearchParams}
                  onSubmit={onFiltersSubmit}
               />
            </aside>
            <section className={styles["home__content"]}>
               <h2>Results</h2>
               {isLoading && <Loading />}
               {error && <div>{error}</div>}
               {movies && <MovieList
                  movies={movies}
                  currentPage={homePagePage}
                  maxPage={pages}
                  quantity={homePageLimit}
                  changePaginationParams={setPaginationParams}
               ></MovieList>
               }
            </section>
         </div>
      </div >
   )
}

export default Home;