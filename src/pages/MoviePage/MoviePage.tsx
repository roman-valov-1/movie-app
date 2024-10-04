import { useParams } from "react-router-dom";
import styles from './MoviePage.module.css';
import { useSearchMovieByIdQuery } from "../../store/movieById/movieById";
import PersonsList from "../../components/PersonsList/PersonsList";
import SimilarMovies from "../../components/SimilarMovies/SimilarMovies";


function MoviePage() {
   const { id } = useParams();

   const { isLoading, isError, data } = useSearchMovieByIdQuery(id);


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
            {data.similarMovies?.length && <div className={styles['movie__similar']}>
               <h3>Similar movies</h3>
               <SimilarMovies movies={data.similarMovies} />
            </div>}
         </section>}
      </div>

   )
}

export default MoviePage;