
export interface IMovieList {
   movies: any;
   currentPage: number;
   maxPage: number | null;
   quantity: number;
   changePaginationParams(params: any): void; 
}