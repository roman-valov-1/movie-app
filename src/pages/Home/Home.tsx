import { useRef } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import TextInput from '../../components/TextInput/TextInput';
import styles from './Home.module.css';
import Button from '../../components/Button/Button';

function Home() {

   return (
      <div className='container'>
         <section className={styles['home']}>
            <h1 className='h1'>Let's find something good</h1>
            <form className={styles['home__search-block']}>
               <TextInput 
                  type={'text'} 
                  name={'search'}
                  placeholder={"Type a film's name"}
               />
               <Button>Find</Button>
            </form>
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