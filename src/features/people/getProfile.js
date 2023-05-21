export const getProfile = async (id) => {
  const KEY_API = "445d0cbde8fc680f93bc54bd75a8924d";
  const URL_API = `https://api.themoviedb.org/3/person/${id}?api_key=${KEY_API}&language=en-US&`;

  const response = await fetch(URL_API);

  if (!response.ok) {
    throw Error(response.statusText);
  }

  return await response.json();
};
