
import { MouseEvent } from 'react';
import { IPaginationButtonsBlock } from './PaginationButtons.props';
import { DOTS, usePagination } from '../../hooks/usePagination';
import Button from '../Button/Button';

function PaginationButtons({
   currentPage,
   maxPage,
   changePage }: IPaginationButtonsBlock) {

   const onChangePageHandler = (e: MouseEvent): void => {
      const target = e.target as HTMLElement;

      changePage(Number(target.textContent));
   };

   const paginationRange = usePagination({
      maxPage,
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
         onClick={onChangePageHandler}
         disabled={currentPage == 1}>
         Prev
      </Button>
      {paginationRange.map(pageNumber => {
         if (pageNumber === DOTS) {
            return <div>...</div>;
         }

         return (
            <Button
               styleType={'transparent'}
               page={currentPage}
               onClick={onChangePageHandler}>
               {pageNumber}
            </Button>
         );
      })}
      <Button
         styleType={'transparent'}
         page={currentPage}
         onClick={onChangePageHandler}
         disabled={currentPage == lastPage}>
         Next
      </Button>
   </>;
}

export default PaginationButtons