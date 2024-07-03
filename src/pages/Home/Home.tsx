import MovieCard from '../../components/MovieCard/MovieCard';
import styles from './Home.module.css';

function Home() {
   return (
      <div className='container'>
         <section className={styles['home']}>
            <div>Search</div>
            <div>FilterPopUp</div>
            <div>
               <MovieCard />
               <MovieCard />
               <MovieCard />
            </div>
         </section>
      </div>
   )
}

export default Home;