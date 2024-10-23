import { IPaginationContainerProps } from './PaginationBlock.props.ts';
import styles from './PaginationBlock.module.css';
import { ISearchParams } from '../../models/ISearchParams.ts';
import PaginationButtons from '../PaginationButtons/PaginationButtons.tsx';
import { useScrollIntoView } from '../../hooks/useScrollIntoView.ts';
import PaginationSelect from '../PaginationSelect/PaginationSelect.tsx';
import { useLayoutEffect, useState } from 'react';


function PaginationBlock({
   children,
   currentPage,
   maxPage,
   quantity,
   changePaginationParams
}: IPaginationContainerProps) {

   const quantityFilterList: number[] = [10, 20, 50];
   const [windowWidth, setWindowWidth] = useState<number>(0);

   const changePage = (value: string | number): void => {
      if (value == 'next') {
         changePaginationParams((prevState: ISearchParams) => ({ ...prevState, page: +prevState.page + 1 }))
         useScrollIntoView();
         return;
      }

      if (value == 'prev') {
         changePaginationParams((prevState: ISearchParams) => ({ ...prevState, page: +prevState.page - 1 }))
         useScrollIntoView();
         return;
      }

      changePaginationParams((prevState: ISearchParams) => ({ ...prevState, page: +value }));

      useScrollIntoView();
   }

   const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
   }

   useLayoutEffect(() => {
      handleWindowResize();
      window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize)
   }, [])

   return (
      <div className={styles['pagination']}>
         {quantity && <PaginationSelect
            isMultiple={false}
            startRadioValue={quantity}
            changeQuantityParams={changePaginationParams}
            name={'quantity'}
            list={quantityFilterList}
         />
         }
         <div className={styles['pagination__main']}>
            {children}
         </div>
         {children && <div className={styles['pagination__buttons']}>
            <PaginationButtons
               currentPage={currentPage}
               maxPage={maxPage}
               changePage={changePage}
               windowWidth={windowWidth}
            />
         </div>}
      </div>
   )
}

export default PaginationBlock;