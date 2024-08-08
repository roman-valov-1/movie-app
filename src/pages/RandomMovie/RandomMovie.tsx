import { ChangeEvent } from "react";
import Button from "../../components/Button/Button";
import MovieList from "../../components/MovieList/MovieList";
import SelectBlock from "../../components/SelectBlock/SelectBlock";
import styles from './RandomMovie.module.css';

function RandomMovie() {

   const formData = {
      genres: [],
      countries: []
   }

   const formChangeHandler = (e: ChangeEvent) => {
      const genresArr: string[] = [];
      const countriesArr: string[] = [];

      e.currentTarget.querySelectorAll('input').forEach(function (input) {

         if (input.type === 'radio' && input.name === 'genres' && input.checked === true) {
            genresArr.push(input.value);
         }

         if (input.type === 'radio' && input.name === 'countries' && input.checked === true) {
            countriesArr.push(input.value);
         }

      });
      formData.genres = genresArr;
      formData.countries = countriesArr;

      console.log(formData);
   }


   return (
      <div className="container" >
         <h1 className="h1">Find random movie</h1>
         <div className={styles["random"]}>
            <aside className={styles["random__aside"]}>
               <form className={styles["random__form"]} onChange={formChangeHandler}>
                  <h2>Filters</h2>
                  <div className={styles['random__form-item']}>
                     <span>Год выпуска:</span>
                     <SelectBlock list={['1971-1980', '1981-1990']} name={'year'} startRadioValue={'1971-1980'} />
                  </div>
                  <div className={styles['random__form-item']}>
                     <span>Год выпуска:</span>
                     <SelectBlock list={['комедия', 'драма']} name={'genres'} startRadioValue={'комедия'} />
                  </div>
                  <div className={styles['random__form-item']}>
                     <span>Год выпуска:</span>
                     <SelectBlock list={['США', 'Великобритания']} name={'countries'} startRadioValue={'США'} />
                  </div>
                  <Button>Искать</Button>
               </form>
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