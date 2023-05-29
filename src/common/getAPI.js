export const IMAGE_PATH = "https://image.tmdb.org/t/p/w500/";
const KEY_API = "445d0cbde8fc680f93bc54bd75a8924d";
const BASE_PATH = "https://api.themoviedb.org/3";
let URL_API;

export const useGetAPI = async (referenceType, param1) => {
  switch (referenceType) {
    case "moviesList":
      URL_API = `${BASE_PATH}/movie/popular?api_key=${KEY_API}&language=en-US&page=${param1}`;
      break;
    case "movie":
      URL_API = `${BASE_PATH}/movie/${param1}?api_key=${KEY_API}&language=en-US`;
      break;
    case "movieCredits":
      URL_API = `${BASE_PATH}/movie/${param1}/credits?api_key=${KEY_API}&language=en-US`;
      break;
    case "peopleList":
      URL_API = `${BASE_PATH}/person/popular?api_key=${KEY_API}&language=en-US&page=${param1}`;
      break;
    case "profile":
      URL_API = `${BASE_PATH}/person/${param1}?api_key=${KEY_API}&language=en-US&`;
      break;
    case "profileCredits":
      URL_API = `${BASE_PATH}/person/${param1}/combined_credits?api_key=${KEY_API}&language=en-US&`;
      break;
    case "movieGenres":
      URL_API = `${BASE_PATH}/genre/movie/list?api_key=${KEY_API}&language=en`;
  }

  const response = await fetch(URL_API);
  if (!response.ok) {
    throw Error(response.statusText);
  }

  return await response.json();
};
