import styles from './MovieCard.module.css';

function MovieCard() {
   return (
      <div className={styles['movie-card']}>
         <div className={styles['movie-card__image']}>
            Image
         </div>
         <div className={styles['movie-card__info']}>
            <div className={styles['movie-card__info-item']}>Title Name</div>
            <div className={styles['movie-card__info-item']}>Genre</div>
            <div className={styles['movie-card__info-item']}>country</div>
            <div className={styles['movie-card__info-item']}>description</div>
         </div>
      </div>
   )
}

export default MovieCard;