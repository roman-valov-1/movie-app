export interface IHomePageState {
   movies: any;
   collectionsNames: string[];
   currentQuery: string;
   page: number;
   limit: number;
   pages: number | null;
   isLoading: boolean;
   error: string;
}