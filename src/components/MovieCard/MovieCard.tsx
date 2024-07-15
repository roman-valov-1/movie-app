import { NavLink } from 'react-router-dom';
import styles from './MovieCard.module.css';
import { IMovieCard } from './MovieCard.props';

function MovieCard({
   imageUrl,
   name,
   genres,
   countries,
   description
}: IMovieCard) {

   return (
      <div className={styles['movie-card']}>
         <div className={styles['movie-card__image']}>
            <img src={imageUrl} alt="movie poster" />
         </div>
         <div className={styles['movie-card__info']}>
            <div className={styles['movie-card__info-item']}>
               <span className={styles['movie-card__info-title']}>Title Name:</span>
               {name}
            </div>
            <div className={styles['movie-card__info-item']}>
               <span className={styles['movie-card__info-title']}>Genre:</span>
               {genres?.map(g => <span>{g.name}</span>)}
               {!genres && <span>No data</span>}
            </div>
            <div className={styles['movie-card__info-item']}>
               <span className={styles['movie-card__info-title']}>Country:</span>
               {countries?.map(c => <span>{c.name}</span>)}
               {!genres && <span>No data</span>}
            </div>
            <div className={styles['movie-card__info-item']}>
               <span className={styles['movie-card__info-title']}>Description:</span>
               {description}
               {!description && <span>No data</span> }
            </div>
         </div>
         <NavLink to='/login' className={styles['movie-card__info-link']}>
            More details
         </NavLink>
      </div>
   )
}

export default MovieCard;