export interface IFiltersState {
   genres: string[];
   countries: string[];
   year: string[];
   isLoading: boolean;
   error: string;
}

export interface IFiltersData {
   countries: string[];
   genres: string[];
}