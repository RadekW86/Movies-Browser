import { KEY_API } from "../../common/KEY_API";

export const getMoviesList = async (page) => {
  const URL_API = `https://api.themoviedb.org/3/movie/popular?api_key=${KEY_API}&language=en-US&page=${page}`;
  const response = await fetch(URL_API);

  if (!response.ok) {
    throw Error(response.statusText);
  }

  return await response.json();
};

export const getMovie = async (movie_id) => {
  const URL_API = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${KEY_API}&language=en-US`;
  const response = await fetch(URL_API);

  if (!response.ok) {
    throw Error(response.statusText);
  }

  return await response.json();
};

export const getMovieCredits = async (movie_id) => {
  const URL_API = `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${KEY_API}&language=en-US`;
  const response = await fetch(URL_API);

  if (!response.ok) {
    throw Error(response.statusText);
  }

  return await response.json();
};
