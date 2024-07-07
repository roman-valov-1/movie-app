
import MovieCard from '../../components/MovieCard/MovieCard';
import TextInput from '../../components/TextInput/TextInput';
import styles from './Home.module.css';
import Button from '../../components/Button/Button';
import Checkbox from '../../components/Checkbox/Checkbox';
import { SyntheticEvent } from 'react';

function Home() {

   function submitHandler(e: SyntheticEvent) {
      e.preventDefault();
   }

   return (
      <div className='container'>
         <section className={styles['home']}>
            <h1 className='h1'>Let's find something good</h1>
            <form className={styles['home__search-block']} onSubmit={submitHandler}>
               <TextInput 
                  type={'text'} 
                  name={'search'}
                  placeholder={"Type a film's name"}
               />
               <Checkbox 
                  value={'criminal'}
                  name={'genre'}
               />
               <Checkbox 
                  value={'horror'}
                  name={'genre'}
               />
               <Checkbox 
                  value={'comedy'}
                  name={'genre'}
               />
               <Button type='submit'>Find</Button>
            </form>
            <div className={styles['home__movie-list']}>
               <MovieCard />
               <MovieCard />
               <MovieCard />
               <MovieCard />
               <MovieCard />
            </div>
         </section>
      </div>
   )
}

export default Home;