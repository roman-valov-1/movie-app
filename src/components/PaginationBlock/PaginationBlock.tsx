import { IPaginationContainerProps } from './PaginationBlock.props.ts';
import styles from './PaginationBlock.module.css';
import { ISearchParams } from '../../types/ISearchParams.types.ts';
import PaginationButtonsBlock from '../PaginationButtonsBlock/PaginationButtonsBlock.tsx';
import { useScrollIntoView } from '../../hooks/useScrollIntoView.ts';
import PaginationSelect from '../PaginationSelect/PaginationSelect.tsx';


function PaginationBlock({
   children,
   currentPage,
   maxPage,
   quantity,
   changePaginationParams
}: IPaginationContainerProps) {

   const quantityFilterList: number[] = [10, 20, 50];


   const changePage = (value: string): void => {

      if (value == 'Next') {
         changePaginationParams((prevState: ISearchParams) => ({ ...prevState, page: +prevState.page + 1 }))
         useScrollIntoView();
         return;
      }

      if (value == 'Prev') {
         changePaginationParams((prevState: ISearchParams) => ({ ...prevState, page: +prevState.page - 1 }))
         useScrollIntoView();
         return;
      }

      changePaginationParams((prevState: ISearchParams) => ({ ...prevState, page: value }));

      useScrollIntoView();
   }

   return (
      <div className={styles['pagination']}>
         <PaginationSelect
            isMultiple={false}
            startRadioValue={quantity}
            changeQuantityParams={changePaginationParams}
            name={'quantity'}
            list={quantityFilterList}
         />
         <div className={styles['pagination__main']}>
            {children}
         </div>
         {children && <div className={styles['pagination__buttons']}>
            <PaginationButtonsBlock
               currentPage={currentPage}
               maxPage={maxPage}
               changePage={changePage}
            />
         </div>}
      </div>
   )
}

export default PaginationBlock;