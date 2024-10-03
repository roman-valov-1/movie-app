export interface IHomePageState {
   movies: any;
   collectionsNames: string[];
   currentCollection: string;
   currentQuery: string;
   page: number;
   limit: number;
   pages: number | null;
   isLoading: boolean;
   error: string;
}