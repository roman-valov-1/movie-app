import MovieCard from '../MovieCard/MovieCard';
import PaginationBlock from '../PaginationBlock/PaginationBlock';
import styles from './MovieList.module.css';
import { IMovieList } from './MovieList.props';

function MovieList({
   movies,
   currentPage,
   maxPage,
   quantity,
   changePaginationParams
}: IMovieList) {

   return (
      <div className={styles['movie-list']}>
         <PaginationBlock
            currentPage={currentPage}
            maxPage={maxPage}
            quantity={quantity}
            changePaginationParams={changePaginationParams}
         >
            <div className={styles['movie-list__content']}>
               {movies && movies.map(movie => (
                  <MovieCard
                     key={movie.id}
                     data={movie}
                  />
               ))}
            </div>

         </PaginationBlock>
      </div>
   )
}

export default MovieList;
