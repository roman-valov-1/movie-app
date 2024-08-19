import { ChangeEvent, useEffect } from 'react';
import SelectBlock from '../SelectBlock/SelectBlock';
import styles from './FiltersBlock.module.css';
import { IFiltersBlockProps } from './FiltersBlock.props';
import { fetchFiltersParams } from '../../store/filtersParams/fetchFiltersParams';
import Button from '../Button/Button';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';



function FiltersBlock({ setSearchParams, onSubmit}: IFiltersBlockProps) {

   const dispatch = useAppDispatch();

   const { countries,
      genres,
      year,
      isLoading,
      error
   } = useAppSelector(state => state.filtersParams);



   const formChangeHandler = (e: ChangeEvent) => {

      e.currentTarget.querySelectorAll('input').forEach(function (input) {

         if (input.type === 'radio' && input.name === 'genres' && input.checked === true) {
            setSearchParams(prevState => ({ ...prevState, genres: input.value }));
         }

         if (input.type === 'radio' && input.name === 'countries' && input.checked === true) {
            setSearchParams(prevState => ({ ...prevState, countries: input.value }));
         }

         if (input.type === 'radio' && input.name === 'year' && input.checked === true) {
            setSearchParams(prevState => ({ ...prevState, year: input.value }));
         }

      });
   }

   useEffect(() => {
      if (!countries && !genres) {
         dispatch(fetchFiltersParams())
      }

      if (countries && genres) {
         setSearchParams(prevState => ({
            ...prevState,
            genres: genres[0],
            countries: countries[0],
            year: year[0]
         }))
      }
   }, [countries, genres])

   return (
      <>
         {isLoading && <p>Loading...</p>}
         {error && <p>{error}</p>}
         {Boolean(genres) && Boolean(countries) && 
         <form className={styles["random__form"]} onChange={formChangeHandler} onSubmit={onSubmit}>
            <h2>Filters</h2>
            <div className={styles['random__form-item']}>
               <span>Год выпуска:</span>
               <SelectBlock list={year} name={'year'} startRadioValue={year[0]} />
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
      </>
   )
}

export default FiltersBlock;