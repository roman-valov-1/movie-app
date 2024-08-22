export interface IMoviesByFiltersState {
   movies: any;
   page: number;
   limit: number;
   pages: number;
   isLoading: boolean;
   error: string;
}