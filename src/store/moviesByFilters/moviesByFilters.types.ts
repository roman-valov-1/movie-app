export interface IMoviesByFiltersState {
   movies: any;
   page: number;
   limit: number;
   pages: number | null;
   isLoading: boolean;
   error: string;
}
