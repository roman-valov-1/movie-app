export interface IMovieById {
   status:              null;
   externalId:          ExternalID;
   rating:              Rating;
   votes:               Rating;
   backdrop:            Backdrop;
   movieLength:         number;
   images:              Images;
   productionCompanies: ProductionCompany[];
   spokenLanguages:     SpokenLanguage[];
   id:                  number;
   type:                string;
   name:                string;
   description:         string;
   distributors:        Distributors;
   premiere:            Premiere;
   slogan:              null;
   year:                number;
   poster:              Backdrop;
   facts:               any[];
   genres:              Country[];
   countries:           Country[];
   seasonsInfo:         any[];
   persons:             Person[];
   lists:               any[];
   typeNumber:          number;
   alternativeName:     null;
   enName:              null;
   names:               Name[];
   imagesInfo:          ImagesInfo;
   updatedAt:           Date;
   similarMovies:       any[];
   budget:              Budget;
   ratingMpaa:          null;
   shortDescription:    null;
   technology:          Technology;
   ticketsOnSale:       boolean;
   fees:                Fees;
   sequelsAndPrequels:  any[];
   ageRating:           number;
   logo:                Backdrop;
   watchability:        Watchability;
   top10:               null;
   top250:              null;
   deletedAt:           null;
   isSeries:            boolean;
   seriesLength:        null;
   totalSeriesLength:   null;
   networks:            null;
   videos:              Videos;
}

export interface Backdrop {
   url:        null | string;
   previewUrl: null | string;
}

export interface Budget {
}

export interface Country {
   name: string;
}

export interface Distributors {
   distributor:        string;
   distributorRelease: null;
}

export interface ExternalID {
   kpHD: null;
   imdb: string;
   tmdb: number;
}

export interface Fees {
   world:  Budget;
   russia: Budget;
   usa:    Budget;
}

export interface Images {
   postersCount:   number;
   backdropsCount: number;
   framesCount:    number;
}

export interface ImagesInfo {
   framesCount: number;
}

export interface Name {
   name:      string;
   language?: string;
   type?:     null;
}

export interface Person {
   id:           number;
   photo:        string;
   name:         string;
   enName:       null;
   description:  null | string;
   profession:   Profession;
   enProfession: EnProfession;
}

export enum EnProfession {
   Actor = "actor",
   Composer = "composer",
   Designer = "designer",
   Director = "director",
   Operator = "operator",
   Producer = "producer",
   Writer = "writer",
}

export enum Profession {
   Актеры = "актеры",
   Композиторы = "композиторы",
   Операторы = "операторы",
   Продюсеры = "продюсеры",
   Редакторы = "редакторы",
   Режиссеры = "режиссеры",
   Художники = "художники",
}

export interface Premiere {
   russia:  Date;
   bluray:  null;
   cinema:  null;
   digital: null;
   dvd:     null;
   world:   null;
}

export interface ProductionCompany {
   name:       string;
   url:        string;
   previewUrl: string;
}

export interface Rating {
   kp:                 number;
   imdb:               number;
   filmCritics:        number;
   russianFilmCritics: number;
   await:              number | null;
}

export interface SpokenLanguage {
   name:   string;
   nameEn: string;
}

export interface Technology {
   hasImax: boolean;
   has3D:   boolean;
}

export interface Videos {
   trailers: any[];
}

export interface Watchability {
   items: any[];
}