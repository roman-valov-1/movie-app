import { useEffect, useState } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import TextInput from '../../components/TextInput/TextInput';
import styles from './Home.module.css';
import { useDebounce } from '../../hooks/useDebounce';
import { useSearchMovieByNameQuery } from '../../store/movie.api';

function Home() {

   const [search, setSearch] = useState('');
   const debounced = useDebounce(search);

   const { isLoading, isError, data } = useSearchMovieByNameQuery(debounced, {
      skip: debounced.length < 3
   });

   useEffect(() => {
      console.log(data);
   }, [debounced]);



   return (
      <div className='container'>
         <section className={styles['home']}>
            <h1 className='h1'>Let's find something good</h1>
            <div className={styles['home__search-block']} >
               <div className={styles['home__search']}>
                  <TextInput
                     type={'text'}
                     name={'search'}
                     placeholder={"Type a film's name"}
                     onChange={e => setSearch(e.target.value)}
                  />
               </div>
            </div>
            <div className={styles['home__movie-list']}>
               {isLoading && <div>Loading...</div>}
               {isError && <div>Error...</div>}
               {data?.map(movie => (
                  <MovieCard
                     key={movie.id}
                     imageUrl={movie.poster.url}
                     name={movie.name}
                     genres={movie.genres}
                     countries={movie.countries}
                     description={movie.description}
                  />
               ))}
            </div>
         </section>
      </div>
   )
}

export default Home;