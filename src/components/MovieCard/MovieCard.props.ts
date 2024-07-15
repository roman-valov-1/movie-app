type genre = {
   name: string;
}

type country = {
   name: string;
}

export interface IMovieCard {
   imageUrl?: string;
   name: string;
   genres?: genre[];
   countries?: country[];
   description?: string;
}