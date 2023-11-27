export const IMAGE_PATH = "https://image.tmdb.org/t/p/original/";
const BASE_PATH = "https://api.themoviedb.org/3";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjU2N2RmNDBkNGE0N2IxNjdkMmRmNjgyNWYzMDhiMiIsInN1YiI6IjY1NjRhMWM5N2RmZGE2NTkzMTc1YTc1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5G5S70tkgmdWhcs6KZIUaWTTp002B_azub7JP2kYrsE",
  },
};
let URL_API;

export const useGetAPI = async (referenceType, param1, param2) => {
  switch (referenceType) {
    case "moviesList":
      URL_API = `${BASE_PATH}/movie/popular?language=en-US&page=${param1}`;
      break;
    case "movie":
      URL_API = `${BASE_PATH}/movie/${param1}?language=en-US`;
      break;
    case "movieCredits":
      URL_API = `${BASE_PATH}/movie/${param1}/credits?language=en-US`;
      break;
    case "peopleList":
      URL_API = `${BASE_PATH}/person/popular?language=en-US&page=${param1}`;
      break;
    case "profile":
      URL_API = `${BASE_PATH}/person/${param1}?language=en-US&`;
      break;
    case "profileCredits":
      URL_API = `${BASE_PATH}/person/${param1}/combined_credits?language=en-US&`;
      break;
    case "moviesSearch":
      URL_API = `${BASE_PATH}/search/movie?query=${param2}&language=en-US&page=${param1}`;
      break;
    case "peopleSearch":
      URL_API = `${BASE_PATH}/search/person?query=${param2}&language=en-US&page=${param1}`;
      break;
    case "movieGenres":
      URL_API = `${BASE_PATH}/genre/movie/list?language=en`;
      break;
  }

  const response = await fetch(URL_API, options);
  if (!response.ok) {
    throw Error(response.statusText);
  }

  return await response.json();
};
