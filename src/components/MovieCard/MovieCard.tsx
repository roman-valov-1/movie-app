import { Link } from 'react-router-dom';
import styles from './MovieCard.module.css';
import { IMovieCard } from './MovieCard.props';
import imageNotFound from './../../assets/image-not-found.jpg';

function MovieCard({
   id,
   imageUrl,
   name,
   genres,
   countries,
   description
}: IMovieCard) {

   return (
      <div className={styles['movie-card']}>
         <div className={styles['movie-card__image']}>
            <img src={imageUrl ? imageUrl : imageNotFound} alt="movie poster" />
         </div>
         <div className={styles['movie-card__info']}>
            <div className={styles['movie-card__info-item']}>
               <span className={styles['movie-card__info-title']}>Title Name:</span>
               {name}
            </div>
            <div className={styles['movie-card__info-item']}>
               <span className={styles['movie-card__info-title']}>Genre:</span>
               <span>
                  {genres ? genres.map(i => i.name).join(', ') : 'No data'}
               </span>
            </div>
            <div className={styles['movie-card__info-item']}>
               <span className={styles['movie-card__info-title']}>Country:</span>
               <span>
                  {countries ? countries.map(i => i.name).join(', ') : 'No data'}
               </span>
            </div>
            <div className={styles['movie-card__info-item']}>
               <span className={styles['movie-card__info-title']}>Description:</span>
               {description}
               {!description && <span>No data</span> }
            </div>
         </div>
         <Link to={`/movie-page/${id}`} target='_blank' className={styles['movie-card__info-link']}>
            More details
         </Link>
      </div>
   )
}

export default MovieCard;