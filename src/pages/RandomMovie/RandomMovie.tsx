import { BaseSyntheticEvent, ChangeEvent, useEffect } from "react";
import Button from "../../components/Button/Button";
import MovieList from "../../components/MovieList/MovieList";
import SelectBlock from "../../components/SelectBlock/SelectBlock";
import styles from './RandomMovie.module.css';
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchFiltersParams } from "../../store/ActionCreators";

function RandomMovie() {

   const dispatch = useAppDispatch();
   const { countries,
      genres,
      years,
      isLoading,
      error } = useAppSelector(state => state.filtersParams);



   const formChangeHandler = (e: ChangeEvent) => {
      const formData = {};
      const genresArr: string[] = [];
      const countriesArr: string[] = [];
      const yearsArr: string[] = [];

      e.currentTarget.querySelectorAll('input').forEach(function (input) {

         if (input.type === 'radio' && input.name === 'genres' && input.checked === true) {
            genresArr.push(input.value);
         }

         if (input.type === 'radio' && input.name === 'countries' && input.checked === true) {
            countriesArr.push(input.value);
         }

         if (input.type === 'radio' && input.name === 'year' && input.checked === true) {
            yearsArr.push(input.value);
         }

      });

      formData.genres = genresArr;
      formData.countries = countriesArr;
      formData.years = yearsArr;

      console.log(formData);
   }

   const onSubmit = (e: BaseSyntheticEvent) => {
      e.preventDefault();
   }

   useEffect(() => {
      dispatch(fetchFiltersParams())
   }, [])


   return (
      <div className="container" >
         <h1 className="h1">Find random movie</h1>
         <div className={styles["random"]}>
            <aside className={styles["random__aside"]}>
               {isLoading && <p>Loading...</p>}
               {error && <p>{error}</p>}
               {!isLoading && !error && <form className={styles["random__form"]} onChange={formChangeHandler} onSubmit={onSubmit}>
                  <h2>Filters</h2>
                  <div className={styles['random__form-item']}>
                     <span>Год выпуска:</span>
                     <SelectBlock list={years} name={'year'} startRadioValue={years[0]} />
                  </div>
                  <div className={styles['random__form-item']}>
                     <span>Год выпуска:</span>
                     <SelectBlock list={genres} name={'genres'} startRadioValue={genres[0]} />
                  </div>
                  <div className={styles['random__form-item']}>
                     <span>Год выпуска:</span>
                     <SelectBlock list={countries} name={'countries'} startRadioValue={countries[0]} />
                  </div>
                  <Button>Искать</Button>
               </form>
               }
            </aside>
            <section className={styles["random__content"]}>
               <h2>Results</h2>
               <MovieList>
                  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed ut cumque eius eaque laudantium temporibus? Facere quos maiores dolore qui rerum necessitatibus eum debitis, fugiat exercitationem expedita, blanditiis laboriosam.</div>
                  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed ut cumque eius eaque laudantium temporibus? Facere quos maiores dolore qui rerum necessitatibus eum debitis, fugiat exercitationem expedita, blanditiis laboriosam.</div>
                  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed ut cumque eius eaque laudantium temporibus? Facere quos maiores dolore qui rerum necessitatibus eum debitis, fugiat exercitationem expedita, blanditiis laboriosam.</div>
                  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sed ut cumque eius eaque laudantium temporibus? Facere quos maiores dolore qui rerum necessitatibus eum debitis, fugiat exercitationem expedita, blanditiis laboriosam.</div>
               </MovieList>
            </section>
         </div>
      </div >
   )
}

export default RandomMovie;