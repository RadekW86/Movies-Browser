export const toMovies = () => "/Movies";
export const toPeople = () => "/People";
export const toExtras = () => "/Extras";

export const toMovie = ({ id } = { id: ":id" }) => `/Movie/id=${id}`;
export const toProfile = ({ id } = { id: ":id" }) => `/Profile/id=${id}`;