import { useParams } from "react-router-dom";
import { useSearchMovieByIdQuery } from "../../store/movie.api";
import styles from './MoviePage.module.css';
import Button from "../../components/Button/Button";
import { useRef, useState } from "react";



function MoviePage() {
   const { id } = useParams();

   const { isLoading, isError, data } = useSearchMovieByIdQuery(id);

   const containerRef = useRef(null);

   const [x, setX] = useState<number>(0);

   const actorsListButtonsHandler = (str: string) => {
      if (str === 'forward') {
         setX(prev => prev -= 500);
         containerRef.current.style = `transform: translateX(${x}px)`;
      }
      if (str === 'back') {
         setX(prev => prev += 500);
         containerRef.current.style = `transform: translateX(${x}px)`;
      }
   }


   return (
      <div className='container'>
         {isLoading && <div>Loading</div>}
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
                  <div className={styles['movie__actors-container']}> 
                     <ul className={styles['movie__actors-list']} ref={containerRef}>
                        {data?.persons.map(person => {
                           if (person.name) return (
                              <li className={styles['movie__actors-item']}>
                                 <img src={person.photo} alt="" />
                                 <span>{person.name}</span>
                              </li>
                           )
                           return;
                        })}
                     </ul>
                  </div>
                  <div className={styles['movie__actors-buttons']}>
                     <Button onClick={() => actorsListButtonsHandler('back')}>back</Button>
                     <Button onClick={() => actorsListButtonsHandler('forward')}>forward</Button>
                  </div>
               </div>
               <div className={styles['movie__description']}>
                  <div className={styles['movie__item-title']}>
                     Descripton of {data?.name}
                  </div>
                  {data?.description}
               </div>
            </div>
            <div className={styles['movie__similar']}>
               <div className={styles['movie__item-title']}>
                  Similar movies
               </div>
            </div>
         </section>}
      </div>

   )
}

export default MoviePage;