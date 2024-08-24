
import { MouseEvent, useState } from 'react';
import Button from '../Button/Button';
import { IPaginationButtonsBlock } from './PaginationButtonsBlock.props';

function PaginationButtonsBlock({
   currentPage,
   maxPage,
   changePage }: IPaginationButtonsBlock) {

   const [isPrevBtnDisabled, setIsPrevBtnDisabled] = useState<boolean>(true);
   const [isNextBtnDisabled, setIsNextBtnDisabled] = useState<boolean>(false);


   const onChangePageHandler = (e: MouseEvent): void => {
      const target = e.target as HTMLElement;

      changePage(target.textContent);

      if (Number(target.textContent) <= 1) {
         setIsPrevBtnDisabled(true);
         setIsNextBtnDisabled(false)
      } else if (target.textContent == String(maxPage)) {
         setIsPrevBtnDisabled(false)
         setIsNextBtnDisabled(true);
      } else {
         setIsPrevBtnDisabled(false)
         setIsNextBtnDisabled(false)
      }
   };

   let buttonsHTML = <>
      <Button styleType={'transparent'} page={currentPage} onClick={onChangePageHandler} disabled={isPrevBtnDisabled}>
         Prev
      </Button>
      <Button styleType={'transparent'} page={currentPage} onClick={onChangePageHandler}>1</Button>
      <div>...</div>
      <Button styleType={'transparent'} page={currentPage} onClick={onChangePageHandler}>{currentPage - 1}</Button>
      <Button styleType={'transparent'} page={currentPage} onClick={onChangePageHandler}>{currentPage}</Button>
      <Button styleType={'transparent'} page={currentPage} onClick={onChangePageHandler}>{currentPage + 1}</Button>
      <div>...</div>
      <Button styleType={'transparent'} page={currentPage} onClick={onChangePageHandler}>{maxPage}</Button>
      <Button styleType={'transparent'} page={currentPage} onClick={onChangePageHandler} disabled={isNextBtnDisabled}>
         Next
      </Button>
   </>;

   if (currentPage < 3) {
      buttonsHTML = <>
         <Button styleType={'transparent'} page={currentPage} onClick={onChangePageHandler} disabled={isPrevBtnDisabled}>
            Prev
         </Button>
         <Button styleType={'transparent'} page={currentPage} onClick={onChangePageHandler}>1</Button>
         <Button styleType={'transparent'} page={currentPage} onClick={onChangePageHandler}>2</Button>
         <Button styleType={'transparent'} page={currentPage} onClick={onChangePageHandler}>3</Button>
         <Button styleType={'transparent'} page={currentPage} onClick={onChangePageHandler}>4</Button>
         <div>...</div>
         <Button styleType={'transparent'} page={currentPage} onClick={onChangePageHandler}>{maxPage}</Button>
         <Button styleType={'transparent'} page={currentPage} onClick={onChangePageHandler} disabled={isNextBtnDisabled}>
            Next
         </Button>
      </>
   } else if (currentPage >= maxPage - 2) {
      buttonsHTML = <>
         <Button styleType={'transparent'} page={currentPage} onClick={onChangePageHandler} disabled={isPrevBtnDisabled}>
            Prev
         </Button>
         <Button styleType={'transparent'} page={currentPage} onClick={onChangePageHandler}>1</Button>
         <div>...</div>
         <Button styleType={'transparent'} page={currentPage} onClick={onChangePageHandler}>{maxPage - 3}</Button>
         <Button styleType={'transparent'} page={currentPage} onClick={onChangePageHandler}>{maxPage - 2}</Button>
         <Button styleType={'transparent'} page={currentPage} onClick={onChangePageHandler}>{maxPage - 1}</Button>
         <Button styleType={'transparent'} page={currentPage} onClick={onChangePageHandler}>{maxPage}</Button>
         <Button styleType={'transparent'} page={currentPage} maxPage={maxPage} onClick={onChangePageHandler} disabled={isNextBtnDisabled}>
            Next
         </Button>
      </>;
   } else if (maxPage < 5) {
      buttonsHTML = <>
         <Button styleType={'transparent'} page={currentPage} onClick={onChangePageHandler} disabled={isPrevBtnDisabled}>
            Prev
         </Button>
         <Button styleType={'transparent'} page={currentPage} onClick={onChangePageHandler}>1</Button>
         <Button styleType={'transparent'} page={currentPage} onClick={onChangePageHandler}>2</Button>
         <Button styleType={'transparent'} page={currentPage} onClick={onChangePageHandler}>3</Button>
         <Button styleType={'transparent'} page={currentPage} onClick={onChangePageHandler}>4</Button>
         <Button styleType={'transparent'} page={currentPage} maxPage={maxPage} onClick={onChangePageHandler} disabled={isNextBtnDisabled}>
            Next
         </Button>
      </>;
   }

   return buttonsHTML;
}

export default PaginationButtonsBlock