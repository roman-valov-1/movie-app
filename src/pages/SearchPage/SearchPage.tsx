import { useState } from 'react';
import TextInput from '../../components/TextInput/TextInput';
import styles from './SearchPage.module.css';
import { useDebounce } from '../../hooks/useDebounce';
import MovieList from '../../components/MovieList/MovieList';
import { useSearchMovieByNameQuery } from '../../store/movieByName/movieByName';
import { useAuthCheck } from '../../hooks/useAuthCheck';
import { IPaginationParams } from '../../models/IPaginationParams';

function SearchPage() {

   useAuthCheck();
   const [searchInputText, setSearchInputText] = useState<string>('');
   const [paginationParams, setPaginationParams] = useState<IPaginationParams>({
      page: 1,
      limit: 10
   });

   const debouncedText = useDebounce(searchInputText);

   const { isLoading, isError, data } = useSearchMovieByNameQuery({text: debouncedText, ...paginationParams}, {
      skip: debouncedText.length < 3,
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
                     onChange={(e) => setSearchInputText(e.target.value)}
                     value={searchInputText}
                  />
               </div>
            </form>
            {isLoading && <div>Loading...</div>}
            {isError && <div>Error...</div>}
            {data && <MovieList
               movies={data.docs}
               currentPage={data?.page}
               maxPage={data?.pages}
               quantity={paginationParams.limit}
               changePaginationParams={setPaginationParams}
            />
            }
         </section>
      </div>
   )
}

export default SearchPage;