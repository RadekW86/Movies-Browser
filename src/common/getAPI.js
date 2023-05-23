const KEY_API = "445d0cbde8fc680f93bc54bd75a8924d";
let URL_API;

export const useGetAPI = async (referenceType, param1) => {
  switch (referenceType) {
    case "moviesList":
      URL_API = `https://api.themoviedb.org/3/movie/popular?api_key=${KEY_API}&language=en-US&page=${param1}`;
      break;
    case "movie":
      URL_API = `https://api.themoviedb.org/3/movie/${param1}?api_key=${KEY_API}&language=en-US`;
      break;
    case "movieCredits":
      URL_API = `https://api.themoviedb.org/3/movie/${param1}/credits?api_key=${KEY_API}&language=en-US`;
      break;
    case "peopleList":
      URL_API = `https://api.themoviedb.org/3/person/popular?api_key=${KEY_API}&language=en-US&page=${param1}`;
      break;
    case "profile":
      URL_API = `https://api.themoviedb.org/3/person/${param1}?api_key=${KEY_API}&language=en-US&`;
      break;
    case "profileCredits":
      URL_API = `https://api.themoviedb.org/3/person/${param1}/combined_credits?api_key=${KEY_API}&language=en-US&`;
      break;
  }

  const response = await fetch(URL_API);
  if (!response.ok) {
    throw Error(response.statusText);
  }

  return await response.json();
};
