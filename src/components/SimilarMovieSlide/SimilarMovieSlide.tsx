import styles from './SimilarMoviesSlide.module.css';

function SimilarMovieSlide({
   arr,
   itemWidth,
   containerWidth
}) {
   return (
      <div className={styles['similar-slide']} style={{ width: containerWidth + 'px' }}>
         {arr.map((movie) => {
            return <div key={movie.id} className={styles['similar-slide__item']} style={{ width: itemWidth + 'px' }}>
               <img src={movie.poster.url} alt="" width={itemWidth + 'px'} />
               <div className={styles['similar-slide__name']}>
                  {movie.name}
               </div>
            </div>
         }
         )}
      </div>
   )
}



export default SimilarMovieSlide;