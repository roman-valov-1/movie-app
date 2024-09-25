export interface IMoviesByCollectionState {
   movies: any;
   collectionsNames: string[];
   currentCollection: string;
   page: number;
   limit: number;
   pages: number | null;
   isLoading: boolean;
   error: string;
}