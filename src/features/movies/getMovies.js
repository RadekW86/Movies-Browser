export const getMoviesList = async (page) => {
  const KEY_API = "445d0cbde8fc680f93bc54bd75a8924d";
  const URL_API = `https://api.themoviedb.org/3/movie/popular?api_key=${KEY_API}&language=en-US&page=${page}`;

  const response = await fetch(URL_API);

  if (!response.ok) {
    throw Error(response.statusText);
  }

  return await response.json();
};
