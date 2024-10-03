import { useParams } from "react-router-dom";
import styles from './MoviePage.module.css';
import { useRef } from "react";
import { useSearchMovieByIdQuery } from "../../store/movieById/movieById";
import PersonsList from "../../components/PersonsList/PersonsList";
import Button from "../../components/Button/Button";



function MoviePage() {
   const { id } = useParams();

   const { isLoading, isError, data } = useSearchMovieByIdQuery(id);

   const similarContainer = useRef<HTMLElement | null>(null);
   const similarList = useRef<HTMLElement | null>(null);


   let containerX = 0;
   let xStep = 0;
   let maxStep = 0;

   const carouselButtonsHandler = (e) => {
      xStep = similarContainer.current.offsetWidth;
      maxStep = Math.ceil(similarList.current.offsetWidth / similarContainer.current.offsetWidth);

      if (e.target.value === 'next') {
         containerX -= xStep;
         similarList.current.style = `transform: translateX(${containerX}px)`;
      }
      if (e.target.value === 'prev') {
         containerX += xStep;
         similarList.current.style = `transform: translateX(${containerX}px)`;
      }
   }

   return (
      <div className='container'>
         {isLoading && <div>Loading</div>}
         {isError && <div>Error</div>}
         {data && <section className={styles['movie']}>

            <div className={styles['movie__item-title']}>
               Main Info
            </div>
            <div className={styles['movie__header']}>
               <div className={styles['movie__poster']}>
                  <img src={data?.poster.url} alt="" />
               </div>
               <div className={styles['movie__info']}>
                  <div className={styles['movie__info-item']}>
                     <span>Name:</span>
                     {data?.name}
                  </div>
                  <div className={styles['movie__info-item']}>
                     <span>Genres:</span>
                     {data?.genres[0].name}
                  </div>
                  <div className={styles['movie__info-item']}>
                     <span>Year:</span>
                     {data?.year}
                  </div>
                  <div className={styles['movie__info-item']}>
                     <span>Distributor:</span>
                     {data?.distributors?.distributor}
                  </div>
                  <div className={styles['movie__info-item']}>
                     <span>Rating:</span>
                     {data?.rating.kp}
                  </div>
               </div>
            </div>
            <div className={styles['movie__main']}>
               <div className={styles['movie__actors']}>
                  <div className={styles['movie__item-title']}>
                     List of actors
                  </div>
                  <PersonsList persons={data.persons} />
               </div>
               <div className={styles['movie__description']}>
                  <div className={styles['movie__item-title']}>
                     Descripton of {data?.name}
                  </div>
                  {data?.description}
               </div>
            </div>
            <div className={styles['movie__similar']}>
               <h3>Similar movies</h3>
               <div className={styles['movie__similar-container']} ref={similarContainer}>
                  <div className={styles['movie__similar-list']} ref={similarList}>
                     {data.similarMovies && data.similarMovies.map((movie) => {
                        return <div key={movie.id}>
                           <img src={movie.poster.url} alt="" width="150px" height="200px" />
                           <div>
                              {movie.name}
                           </div>
                        </div>
                     })}
                  </div>
               </div>
               <div className={styles['movie__similar-buttons']}>
                  <Button value='prev' onClick={carouselButtonsHandler}>Prev</Button>
                  <Button value='next' onClick={carouselButtonsHandler}>Next</Button>
               </div>
            </div>
         </section>}
      </div>

   )
}

export default MoviePage;