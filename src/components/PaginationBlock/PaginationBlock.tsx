import { IPaginationBlockProps } from './PaginationBlock.props.ts';
import styles from './PaginationBlock.module.css';
import Button from '../Button/Button';
import { MouseEvent } from 'react';
import { ISearchParams } from '../../types/ISearchParams.types.ts';


function PaginationBlock({
   children,
   currentPage,
   maxPage,
   quantity,
   changePaginationParams
}: IPaginationBlockProps) {

   const changePage = (e: MouseEvent): void => {
      const target = e.target as HTMLElement

      if (target.textContent == 'Next') {
         changePaginationParams((prevState : ISearchParams) => ({ ...prevState, page: +prevState.page + 1 }))
         return;
      }

      if (target.textContent == 'Prev') {
         changePaginationParams((prevState : ISearchParams) => ({ ...prevState, page: +prevState.page - 1 }))
         return;
      }

      changePaginationParams((prevState : ISearchParams) => ({ ...prevState, page: target.textContent }))
   }


   return (
      <div className={styles['pagination']}>
         <div className={styles['pagination__main']}>
            {children}
         </div>
         {children && <div className={styles['pagination__buttons']}>
            <Button onClick={changePage}>Prev</Button>
            <Button onClick={changePage}>1</Button>
            {currentPage < 3 ?
               <>
                  <Button onClick={changePage}>2</Button>
                  <Button onClick={changePage}>3</Button>
                  <Button onClick={changePage}>4</Button>
               </>
               :
               <>
                  <div>...</div>
                  <Button onClick={changePage}>{currentPage - 1}</Button>
                  <Button onClick={changePage}>{currentPage}</Button>
                  <Button onClick={changePage}>{currentPage + 1}</Button>
               </>
            }

            <div>...</div>
            <Button onClick={changePage}>{maxPage}</Button>
            <Button onClick={changePage}>Next</Button>
         </div>}
      </div>
   )
}

export default PaginationBlock;