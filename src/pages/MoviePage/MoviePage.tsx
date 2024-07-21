import { useParams } from "react-router-dom";
import { useSearchMovieByIdQuery } from "../../store/movie.api";
import styles from './MoviePage.module.css';



function MoviePage() {
   const { id } = useParams();

   const { isLoading, isError, data } = useSearchMovieByIdQuery(id);
   console.log(data);

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
                     {data?.distributors.distributor}
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
                  <ul className={styles['movie__actors-list']}>
                     <li className={styles['movie__actors-item']}>
                        <img src={data?.persons[0].photo} alt="" />
                        <span>{data?.persons[0].name}</span>
                     </li>
                     <li className={styles['movie__actors-item']}>
                        <img src={data?.persons[1].photo} alt="" />
                        <span>{data?.persons[1].name}</span>
                     </li>
                     <li className={styles['movie__actors-item']}>
                        <img src={data?.persons[2].photo} alt="" />
                        <span>{data?.persons[2].name}</span>
                     </li>
                     <li className={styles['movie__actors-item']}>
                        <img src={data?.persons[3].photo} alt="" />
                        <span>{data?.persons[3].name}</span>
                     </li>
                     <li className={styles['movie__actors-item']}>
                        <img src={data?.persons[4].photo} alt="" />
                        <span>{data?.persons[4].name}</span>
                     </li>
                  </ul>

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