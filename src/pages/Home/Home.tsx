
import MovieCard from '../../components/MovieCard/MovieCard';
import TextInput from '../../components/TextInput/TextInput';
import styles from './Home.module.css';
import Button from '../../components/Button/Button';
import Checkbox from '../../components/Checkbox/Checkbox';
import { SyntheticEvent } from 'react';
import SelectBlock from '../../components/SelectInput/SelectBlock';

const data = ['criminal', 'horror', 'detective', 'comedy'];
const data2 = ['anime', 'melodrama', 'triller']

function Home() {


   function submitHandler(e: SyntheticEvent) {
      e.preventDefault();
   }

   return (
      <div className='container'>
         <section className={styles['home']}>
            <h1 className='h1'>Let's find something good</h1>
            <form className={styles['home__search-block']} onSubmit={submitHandler}>
               <div className={styles['home__search-header']}>
                  <TextInput
                     type={'text'}
                     name={'search'}
                     placeholder={"Type a film's name"}
                  />
                  <Button type='submit'>Find</Button>
               </div>
               <div className={styles['home__search-checkboxes']}>
                  {data.map((item, index) => {
                     return <Checkbox key={index} value={item} name={'genre'} />
                  })}
               </div>
               <SelectBlock name={'genre'} list={data2} />
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