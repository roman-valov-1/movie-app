
import { IPaginationButtonsBlock } from './PaginationButtons.props';
import { DOTS, usePagination } from '../../hooks/usePagination';
import Button from '../Button/Button';
import styles from './PaginationButtons.module.css';

function PaginationButtons({
   currentPage,
   maxPage,
   changePage, 
   windowWidth }: IPaginationButtonsBlock) {

   const siblingCount = windowWidth < 576 ? 0 : 1;

   const paginationRange = usePagination({
      maxPage,
      siblingCount,
      currentPage
   });

   if (currentPage === 0 || paginationRange.length < 2) {
      return null;
   }

   const lastPage = paginationRange[paginationRange.length - 1]


   return <>
      <Button
         styleType={'transparent'}
         page={currentPage}
         onClick={() => changePage('prev')}
         disabled={currentPage == 1}>
         <svg className={styles['svg']}>
            <use href="./icons-sprite.svg#arrow-left"></use>
         </svg>
      </Button>
      {paginationRange.map(pageNumber => {
         if (pageNumber === DOTS) {
            return <div key={Math.random()}>...</div>;
         }

         return (
            <Button
               styleType={'transparent'}
               page={currentPage}
               onClick={() => changePage(pageNumber)}
               key={pageNumber}>
               {pageNumber}
            </Button>
         );
      })}
      <Button
         styleType={'transparent'}
         page={currentPage}
         onClick={() => changePage('next')}
         disabled={currentPage == lastPage}>
         <svg className={styles['svg']}>
            <use href="./icons-sprite.svg#arrow-right"></use>
         </svg>
      </Button>
   </>;
}

export default PaginationButtons