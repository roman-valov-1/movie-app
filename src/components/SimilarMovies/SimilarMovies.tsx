import { useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import styles from './SimilarMovies.module.css';
import { getChunkedArray } from "../../helpers/getChunkedArray";
import SimilarMovieSlide from "../SimilarMovieSlide/SimilarMovieSlide";


function SimilarMovies({ movies }) {

   const similarContainer = useRef<HTMLDivElement | null>(null);
   const similarList = useRef<HTMLDivElement | null>(null);

   const [stepCounter, setStepCounter] = useState(0);
   const [moviesArray, setMoviesArray] = useState(null);

   const itemWidth = 150;
   let itemsPerSlide = 0;

   const carouselButtonsHandler = (e) => {
      if (e.target.value === 'next') {
         setStepCounter(value => value + 1);
      }
      if (e.target.value === 'prev') {
         setStepCounter(value => value - 1);
      }
   }

   useEffect(() => {
      itemsPerSlide = Math.floor(similarContainer.current.offsetWidth * 0.8 / itemWidth)
      setMoviesArray(getChunkedArray(movies, itemsPerSlide));
   }, [])


   return (
      <div className={styles['similar-movies__container']} ref={similarContainer}>
         <div className={styles['similar-movies__list']} ref={similarList}>
            {moviesArray && moviesArray.map((slide, index) => {
               return index === stepCounter ? <SimilarMovieSlide
                  arr={slide}
                  containerWidth={similarContainer.current.offsetWidth}
                  itemWidth={itemWidth}
               /> : null
            })}
         </div>
         <div className={styles['similar-movies__buttons']}>
            <Button
               value='prev'
               onClick={carouselButtonsHandler}
               disabled={stepCounter == 0}>
               Prev
            </Button>
            <Button
               value='next'
               onClick={carouselButtonsHandler}
               disabled={stepCounter == moviesArray?.length - 1}>
               Next
            </Button>
         </div>
      </div>
   )
}

export default SimilarMovies;