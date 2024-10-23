
export interface IPaginationButtonsBlock {
   maxPage: number;
   currentPage: number;
   windowWidth: number;
   changePage(params: any): void;
}