import { useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import styles from './SimilarMovies.module.css';
import { getChunkedArray } from "../../helpers/getChunkedArray";
import SimilarMovieSlide from "../SimilarMovieSlide/SimilarMovieSlide";


function SimilarMovies({ movies }) {

   const similarContainer = useRef<HTMLDivElement | null>(null);
   const similarList = useRef<HTMLDivElement | null>(null);
   const translateX = useRef<number>(0);
   const xStep = useRef<number>(0);

   const [stepCounter, setStepCounter] = useState(0);
   const [moviesArray, setMoviesArray] = useState(null);

   const itemWidth = 150;
   let itemsPerSlide = 0;


   const carouselButtonsHandler = (e) => {
      xStep.current = similarContainer.current.offsetWidth;

      if (e.target.value === 'next') {
         setStepCounter(value => value + 1);
         translateX.current -= xStep.current;
         similarList.current.style = `transform: translateX(${translateX.current}px)`;
      }
      if (e.target.value === 'prev') {
         translateX.current += xStep.current;
         setStepCounter(value => value - 1);
         similarList.current.style = `transform: translateX(${translateX.current}px)`;
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
               return <SimilarMovieSlide
                  arr={slide}
                  containerWidth={similarContainer.current.offsetWidth}
                  itemWidth={itemWidth}
               />
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