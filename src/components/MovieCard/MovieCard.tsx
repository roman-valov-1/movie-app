import { Link } from 'react-router-dom';
import styles from './MovieCard.module.css';
import { IMovieCard } from './MovieCard.props';
import imageNotFound from './../../assets/image-not-found.jpg';
import kpIcon from '/kp.svg';
import imdbIcon from '/imdb.png';

function MovieCard( {data}: IMovieCard) {

   const NO_DATA = 'Данные отсутствуют';

   return (
      <div className={styles['movie-card']}>
         <div className={styles['movie-card__image']}>
            <img src={data?.poster?.url ? data.poster.url : imageNotFound} alt="movie poster" />
         </div>
         <div className={styles['movie-card__info']}>
            <div className={styles['movie-card__info-item']}>
               <span className={styles['movie-card__info-title']}>
                  {data.name ?? data.names[0]?.name ?? data.alternativeName ?? NO_DATA}
               </span>
            </div>
            <div className={styles['movie-card__info-item']}>
               {data.genres ? data.genres.map(i => i.name).join(', ') : NO_DATA}
            </div>
            <div className={styles['movie-card__info-item']}>
               {data.countries ? data.countries.map(i => i.name).join(', ') : NO_DATA}&nbsp;|&nbsp; 
               {data.year ?? NO_DATA}
            </div>
            <div className={styles['movie-card__rating']}>
               <div className={styles['movie-card__rating-item']}>
                  <img src={kpIcon} alt="Логотип Кинопоиска" />
                  {data.rating.kp ? data.rating.kp :  "-" }
               </div>
               <div className={styles['movie-card__rating-item']}>
                  <img src={imdbIcon} alt="Логотип IMDB" />
                  {data.rating.imdb ? data.rating.kp :  "-"}
               </div>
            </div>
         </div>
         <Link to={`/movie-page/${data.id}`} target='_blank' className={styles['movie-card__info-link']}>
            Подробнее
         </Link>
      </div>
   )
}

export default MovieCard;