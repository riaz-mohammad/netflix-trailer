export interface ShowGenre {
  id: number;
  name: string;
}


export interface MovieGenre{
  id: number;
  name: string;
}



export interface Movie {
  genre_ids: Array<number>;
  id: number;
  title: string;
  name: string;
  release_data: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  original_name: string;
}
  
  
export interface Results {
  results: Movie[];
}

export interface MovieTrailer {
  results: Array<any>;
}
