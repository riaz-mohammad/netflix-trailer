export type Title =
  | 'TRENDING'
  | 'ORIGINAL SHOWS'
  | 'ORIGINAL MOVIES'
  | 'POPULAR MOVIES'
  | 'POPULAR SHOWS'
  | 'TOP RATED MOVIES'
  | 'TOP RATED SHOWS'
  | 'SIMILAR MOVIES'
  | 'SIMILAR SHOWS'
  | 'MOVIE TRAILER'
  | 'SHOW TRAILER';


export type MovieGenreName =
  | 'Action'
  | 'Adventure'
  | 'Animation'
  | 'Comedy'
  | 'Crime'
  | 'Documentary'
  | 'Drama'
  | 'Family'
  | 'Fantasy'
  | 'History'
  | 'Horror'
  | 'Music'
  | 'Mystery'
  | 'Romance'
  | 'Science Fiction'
  | 'TV Movie'
  | 'Thriller'
  | 'War'
  | 'Western';


export type ShowGenreName =
  | 'Action & Adventure'
  | 'Animation'
  | 'Comedy'
  | 'Crime'
  | 'Documentary'
  | 'Drama'
  | 'Family'
  | 'Kids'
  | 'Mystery'
  | 'News'
  | 'Reality'
  | 'Sci-Fi & Fantasy'
  | 'Soap'
  | 'Talk'
  | 'War & Politics'
  | 'Western';


export type Trailer = 'MOVIE TRAILER' | 'SHOW TRAILER';
export interface ShowGenre {
  id: number;
  name: string;
}
export interface MovieGenre {
  id: number;
  name: string;
}


export interface Results<T> {
  results: T;
}

export interface TrailerKey {
  key: string;
  type: 'Trailer' | 'Teaser';
}

export interface InfoShow {
  name: string;
  original_name: string;
  first_air_date: string;
}

export type InfoMovie = {
  title: string;
  original_title: string;
  release_date: string;
};
export interface Details {
  id: number;
  genre_ids: number[];
  backdrop_path: string;
  poster_path: string;
  popularity: number;
  overview: string;
  media_type?: string;
}

export interface OriginalMovie extends InfoMovie, InfoShow, Details {}
export interface OriginalShow extends InfoShow, InfoMovie, Details {}

export interface Show extends Details, InfoShow {}
export interface Movie extends Details, InfoMovie {}
export interface Preview extends Media {};

export interface Movie extends Details {
  title: string;
  original_title: string;
  release_date: string;
}

export interface Show extends Details{
  name: string;
  original_name: string;
  first_air_date: string;
}
export interface Media {
  id: number;
  genre_ids?: number[];
  backdrop_path: string;
  poster_path: string;
  popularity: number;
  overview: string;
  media_type?: string;
  title?: string;
  original_title?: string;
  release_date?: string;
  name?: string;
  original_name?: string;
  first_air_date?: string;
}


export type ActivateRoute = 'shows' | 'movies' | 'home';

