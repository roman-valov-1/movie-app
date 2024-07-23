import { useState } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import TextInput from '../../components/TextInput/TextInput';
import styles from './Home.module.css';
import { useDebounce } from '../../hooks/useDebounce';
import { useSearchMovieByNameQuery } from '../../store/movie.api';
import { ISearchParams } from '../../types/ISearchParams.types';
import PaginationBlock from '../../components/PaginationBlock/PaginationBlock';

function Home() {

   const [search, setSearch] = useState<ISearchParams>({
      search: '',
      page: 1,
      limit: 10
   });
   const debounced = useDebounce(search.search);

   const { isLoading, isError, data } = useSearchMovieByNameQuery(search, {
      skip: debounced.length < 3,
      refetchOnFocus: true
   });

   // const formData = {
   //    search: '',
   //    genres: [],
   //    countries: []
   // }

   // const formChangeHandler = (e: ChangeEvent) => {
   //    const genresArr: string[] = [];
   //    const countriesArr: string[] = [];

   //    e.currentTarget.querySelectorAll('input').forEach(function (input) {
   //       if (input.type === 'text') formData.search = input.value;

   //       if (input.type === 'checkbox' && input.name === 'genres' && input.checked === true) {
   //          genresArr.push(input.value);
   //       }

   //       if (input.type === 'checkbox' && input.name === 'countries' && input.checked === true) {
   //          countriesArr.push(input.value);
   //       }

   //    });
   //    formData.genres = genresArr;
   //    formData.countries = countriesArr;
   // }



   return (
      <div className='container'>
         <section className={styles['home']}>
            <h1 className='h1'>Let's find something good</h1>
            <form className={styles['home__search-block']} >
               <div className={styles['home__search']}>
                  <TextInput
                     type={'text'}
                     name={'search'}
                     placeholder={"Type a film's name"}
                     onChange={e => setSearch(prevState => ({ ...prevState, search: e.target.value }))}
                  />
               </div>
            </form>
            <div className={styles['home__movie-list']}>
               {isLoading && <div>Loading...</div>}
               {isError && <div>Error...</div>}
               <PaginationBlock
                  currentPage={data?.page}
                  maxPage={data?.pages}
                  quantity={data?.limit}
                  changePaginationParams={setSearch}
               >
                  {data?.docs.map(movie => (
                     <MovieCard
                        key={movie.id}
                        id={movie.id}
                        imageUrl={movie.poster.url}
                        name={movie.name}
                        genres={movie.genres}
                        countries={movie.countries}
                        description={movie.shortDescription}
                     />
                  ))}
               </PaginationBlock>

            </div>
         </section>
      </div>
   )
}

export default Home;