
import Button from '../Button/Button';
import { IPaginationButtonsBlock } from './PaginationButtonsBlock.props';

function PaginationButtonsBlock({ currentPage, maxPage, changePage }: IPaginationButtonsBlock) {

   let buttonsHTML = <>
      <Button styleType={'transparent'} page={currentPage} onClick={changePage}>Prev</Button>
      <Button styleType={'transparent'} page={currentPage} onClick={changePage}>1</Button>
      <div>...</div>
      <Button styleType={'transparent'} page={currentPage} onClick={changePage}>{currentPage - 1}</Button>
      <Button styleType={'transparent'} page={currentPage} onClick={changePage}>{currentPage}</Button>
      <Button styleType={'transparent'} page={currentPage} onClick={changePage}>{currentPage + 1}</Button>
      <div>...</div>
      <Button styleType={'transparent'} page={currentPage} onClick={changePage}>{maxPage}</Button>
      <Button styleType={'transparent'} page={currentPage} onClick={changePage}>Next</Button>
   </>;

   if (currentPage < 3) {
      buttonsHTML = <>
         <Button styleType={'transparent'} page={currentPage} onClick={changePage}>Prev</Button>
         <Button styleType={'transparent'} page={currentPage} onClick={changePage}>1</Button>
         <Button styleType={'transparent'} page={currentPage} onClick={changePage}>2</Button>
         <Button styleType={'transparent'} page={currentPage} onClick={changePage}>3</Button>
         <Button styleType={'transparent'} page={currentPage} onClick={changePage}>4</Button>
         <div>...</div>
         <Button styleType={'transparent'} page={currentPage} onClick={changePage}>{maxPage}</Button>
         <Button styleType={'transparent'} page={currentPage} onClick={changePage}>Next</Button>
      </>
   } else if (currentPage >= maxPage - 2) {
      buttonsHTML = <>
         <Button styleType={'transparent'} page={currentPage} onClick={changePage}>Prev</Button>
         <Button styleType={'transparent'} page={currentPage} onClick={changePage}>1</Button>
         <div>...</div>
         <Button styleType={'transparent'} page={currentPage} onClick={changePage}>{maxPage - 3}</Button>
         <Button styleType={'transparent'} page={currentPage} onClick={changePage}>{maxPage - 2}</Button>
         <Button styleType={'transparent'} page={currentPage} onClick={changePage}>{maxPage - 1}</Button>
         <Button styleType={'transparent'} page={currentPage} onClick={changePage}>{maxPage}</Button>
         <Button styleType={'transparent'} page={currentPage} maxPage={maxPage} onClick={changePage}>Next</Button>
      </>;
   } else if (maxPage < 5) {
      buttonsHTML = <>
         <Button styleType={'transparent'} page={currentPage} onClick={changePage}>Prev</Button>
         <Button styleType={'transparent'} page={currentPage} onClick={changePage}>1</Button>
         <Button styleType={'transparent'} page={currentPage} onClick={changePage}>2</Button>
         <Button styleType={'transparent'} page={currentPage} onClick={changePage}>3</Button>
         <Button styleType={'transparent'} page={currentPage} onClick={changePage}>4</Button>
         <Button styleType={'transparent'} page={currentPage} maxPage={maxPage} onClick={changePage}>Next</Button>
      </>;
   }

   return buttonsHTML;
}

export default PaginationButtonsBlock