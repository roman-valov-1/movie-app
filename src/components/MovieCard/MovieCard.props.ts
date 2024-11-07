type genre = {
   name: string;
}

type country = {
   name: string;
}

export interface IMovieCard {
   id: number;
   imageUrl?: string;
   name: string;
   genres?: genre[];
   countries?: country[];
   ratingIMDB?: number;
   ratingKP?: number;
}