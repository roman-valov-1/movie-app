import styles from './MovieList.module.css';
import { IMovieList } from './MovieList.props';

function MovieList({children}: IMovieList) {
   return (
      <div className={styles['movie-list']}>
         {children}
      </div>
   )
}

export default MovieList;
