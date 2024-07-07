import { NavLink } from 'react-router-dom';
import styles from './MovieCard.module.css';

function MovieCard() {
   return (
      <div className={styles['movie-card']}>
         <div className={styles['movie-card__image']}>
            Image
         </div>
         <div className={styles['movie-card__info']}>
            <div className={styles['movie-card__info-item']}>
               <span className={styles['movie-card__info-title']}>Title Name:</span>
               Some title
            </div>
            <div className={styles['movie-card__info-item']}>
               <span className={styles['movie-card__info-title']}>Genre:</span>
               Genre 1, Genre 2, Genre 3, Genre 4.
            </div>
            <div className={styles['movie-card__info-item']}>
               <span className={styles['movie-card__info-title']}>Country:</span>
               List of countries
            </div>
            <div className={styles['movie-card__info-item']}>
               <span className={styles['movie-card__info-title']}>Description:</span>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda laudantium molestias architecto harum suscipit. Laboriosam corporis maxime quidem laborum, aspernatur magni nobis magnam vero, cupiditate amet accusantium, voluptas officia illum?
            </div>
         </div>
         <NavLink to='/login' className={styles['movie-card__info-link']}>
            More details
         </NavLink>
      </div>
   )
}

export default MovieCard;