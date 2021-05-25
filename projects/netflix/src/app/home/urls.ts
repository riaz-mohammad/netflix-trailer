
export const BASE_URL = 'https://api.themoviedb.org/3';
export const API_KEY = '214849890feefa84c31c1ba22d9ef072';
export const IMAGES = 'https://image.tmdb.org/t/p/original/';

export const URLS = {
  TRENDING_URL: `${BASE_URL}/trending/all/week?api_key=${API_KEY}`,
  POPULAR_MOVIES_URL: `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=1`,
  SEARCH_URL: `${BASE_URL}/search/multi?api_key=${API_KEY}&query=''`,
  MOVIES_GENRES_URL: `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`,
  SHOWS_GENRES_URL: `${BASE_URL}/genre/tv/list?api_key=${API_KEY}`,
  MOVIES_BY_GENRES_URL: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
  SHOWS_BY_GENRES_URL: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=28`,
  GET_MOVIE_BY_NAME_URL: `${BASE_URL}/search/movie?api_key=${API_KEY}&query=''`,
  GET_SHOW_BY_NAME_URL: `${BASE_URL}/search/tv?api_key=${API_KEY}&query=''`,
  SIMILAR_SHOW_URL: `${BASE_URL}/tv/{tv_id}/similar?api_key=${API_KEY}page=1`,
  SIMILAR_MOVIE_URL: `${BASE_URL}/movie/${123}/similar?api_key=${API_KEY}`,
  MOVIE_INFO_URL: `${BASE_URL}/movie/${123}?api_key=${API_KEY}`,
  MOVIE_TRAILER_URL: `${BASE_URL}/movie/${123}/videos?api_key=${API_KEY}`,
  SHOW_TRAILER_URL: `${BASE_URL}/tv/${123}/videos?api_key=${API_KEY}`,
};