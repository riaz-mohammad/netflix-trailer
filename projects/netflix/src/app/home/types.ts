

export interface ShowGenre {
  id: number;
  name: string;
}
export interface MovieGenre{
  id: number;
  name: string;
}



export type Title = 'Shows' | 'Movies';
export interface Results<T> {
  results: T;
}

export interface MovieTrailer {
  results: Array<any>;
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

export interface OriginalMovie extends InfoMovie, Details {}
export interface OriginalShow extends InfoShow, Details {}
 
export interface Preview extends Details, Partial<InfoShow>, Partial<InfoMovie> {}


export interface Show extends Details, InfoShow {}
export interface Movie extends Details, InfoMovie {}



export interface Media {
  id: number;
  genre_ids: number[];
  backdrop_path: string;
  poster_path: string;
  popularity: number;
  overview: string;
  media_type: string;
  title: string;
  original_title: string;
  release_date: string;
  name: string;
  original_name: string;
  first_air_date: string;
}
   





































