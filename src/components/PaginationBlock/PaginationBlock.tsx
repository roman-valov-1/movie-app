import { IPaginationBlockProps } from './PaginationBlock.props.ts';
import styles from './PaginationBlock.module.css';
import Button from '../Button/Button';
import { MouseEvent } from 'react';
import { ISearchParams } from '../../types/ISearchParams.types.ts';
import SelectBlock from '../SelectBlock/SelectBlock.tsx';


function PaginationBlock({
   children,
   currentPage,
   maxPage,
   quantity,
   changePaginationParams
}: IPaginationBlockProps) {

   const quantityFilterList: number[] = [10, 20, 50];

   const changePage = (e: MouseEvent): void => {
      const target = e.target as HTMLElement

      if (target.textContent == 'Next') {
         changePaginationParams((prevState: ISearchParams) => ({ ...prevState, page: +prevState.page + 1 }))
         return;
      }

      if (target.textContent == 'Prev') {
         changePaginationParams((prevState: ISearchParams) => ({ ...prevState, page: +prevState.page - 1 }))
         return;
      }

      changePaginationParams((prevState: ISearchParams) => ({ ...prevState, page: target.textContent }))
   }

   let buttonsHTML = <>
      <Button styleType={'transparent'} onClick={changePage}>Prev</Button>
      <Button styleType={'transparent'} onClick={changePage}>1</Button>
      <div>...</div>
      <Button styleType={'transparent'} onClick={changePage}>{currentPage - 1}</Button>
      <Button onClick={changePage}>{currentPage}</Button>
      <Button styleType={'transparent'} onClick={changePage}>{currentPage + 1}</Button>
      <div>...</div>
      <Button styleType={'transparent'} onClick={changePage}>{maxPage}</Button>
      <Button styleType={'transparent'} onClick={changePage}>Next</Button>
   </>;

   if (currentPage < 3) {
      buttonsHTML = <>
         <Button styleType={'transparent'} onClick={changePage}>Prev</Button>
         <Button styleType={'transparent'} onClick={changePage}>1</Button>
         <Button styleType={'transparent'} onClick={changePage}>2</Button>
         <Button styleType={'transparent'} onClick={changePage}>3</Button>
         <Button styleType={'transparent'} onClick={changePage}>4</Button>
         <div>...</div>
         <Button styleType={'transparent'} onClick={changePage}>{maxPage}</Button>
         <Button styleType={'transparent'} onClick={changePage}>Next</Button>
      </>
   } else if (currentPage >= maxPage - 2) {
      buttonsHTML = <>
         <Button styleType={'transparent'} onClick={changePage}>Prev</Button>
         <Button styleType={'transparent'} onClick={changePage}>1</Button>
         <div>...</div>
         <Button styleType={'transparent'} onClick={changePage}>{maxPage - 3}</Button>
         <Button styleType={'transparent'} onClick={changePage}>{maxPage - 2}</Button>
         <Button styleType={'transparent'} onClick={changePage}>{maxPage - 1}</Button>
         <Button styleType={'transparent'} onClick={changePage}>{maxPage}</Button>
         <Button styleType={'transparent'} onClick={changePage}>Next</Button>
      </>;
   }




   return (
      <div className={styles['pagination']}>
         <SelectBlock
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
            {buttonsHTML}
         </div>}
      </div>
   )
}

export default PaginationBlock;