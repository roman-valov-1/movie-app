export interface ServerResponse {
   docs: IMovie[]
   total: number
   limit: number
   page: number
   pages: number
}

export interface IMovie {
   internalNames: string[]
   name: string
   alternativeName: string
   enName: string
   year: number
   genres: Genre[]
   countries: Country[]
   releaseYears: ReleaseYear[]
   id: number
   externalId: ExternalId
   names: Name[]
   type: string
   description: string
   shortDescription: string
   logo?: Logo
   poster: Poster
   backdrop: Backdrop
   rating: Rating
   votes: Votes
   movieLength: number
   internalRating: number
   internalVotes: number
   isSeries: boolean
   ticketsOnSale: boolean
   totalSeriesLength?: number
   seriesLength?: number
   ratingMpaa?: string
   ageRating?: number
   top10: any
   top250?: number
   typeNumber: number
   status?: string
}

export interface Genre {
   name: string
}

export interface Country {
   name: string
}

export interface ReleaseYear {
   start?: number
   end?: number
}

export interface ExternalId {
   imdb?: string
   tmdb?: number
   kpHD?: string
}

export interface Name {
   name: string
   language?: string
   type?: string
}

export interface Logo {
   url?: string
   previewUrl?: string
}

export interface Poster {
   url?: string
   previewUrl?: string
}

export interface Backdrop {
   url?: string
   previewUrl?: string
}

export interface Rating {
   kp: number
   imdb: number
   filmCritics: number
   russianFilmCritics: number
   await?: number
}

export interface Votes {
   kp: number
   imdb: number
   filmCritics: number
   russianFilmCritics: number
   await: number
}