export interface IMovieResponse {
   id: number;
   imageUrl?: string;
   name: string;
   genres?: genre[];
   countries?: country[];
   description?: string;
}

export interface IRandomMovieState {
   movie: IMovieResponse | string;
   isLoading: boolean;
   error: string;
}

type genre = {
   name: string;
}

type country = {
   name: string;
}

