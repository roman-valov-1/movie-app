export interface IMoviesByFiltersState {
   movies: any;
   statePage: number;
   stateLimit: number;
   statePages: number | null;
   isLoading: boolean;
   error: string;
}
