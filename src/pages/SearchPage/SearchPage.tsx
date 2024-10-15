import { useState } from 'react';
import TextInput from '../../components/TextInput/TextInput';
import styles from './SearchPage.module.css';
import { useDebounce } from '../../hooks/useDebounce';
import { ISearchParams } from '../../models/ISearchParams';
import MovieList from '../../components/MovieList/MovieList';
import { useSearchMovieByNameQuery } from '../../store/movieByName/movieByName';
import { useAuthCheck } from '../../hooks/useAuthCheck';

function SearchPage() {

   useAuthCheck();

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


   return (
      <div className='container'>
         <h1 className='h1'>Поиск по названию</h1>
         <section className={styles['search']}>
            <form className={styles['search__form']} >
               <div className={styles['search__form-item']}>
                  <TextInput
                     type={'text'}
                     name={'search'}
                     placeholder={"Type a film's name"}
                     onChange={e => setSearch(prevState => ({ ...prevState, search: e.target.value }))}
                  />
               </div>
            </form>
            {isLoading && <div>Loading...</div>}
            {isError && <div>Error...</div>}
            {data && <MovieList
               movies={data.docs}
               currentPage={data?.page}
               maxPage={data?.pages}
               quantity={search.limit}
               changePaginationParams={setSearch}
            />
            }
         </section>
      </div>
   )
}

export default SearchPage;