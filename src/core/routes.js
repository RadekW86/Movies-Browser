export const toMovies = () => "/Movies";
export const toPeople = () => "/People";

export const toMovie = ({ id } = { id: ":id" }) => `/Movie/${id}`;
export const toProfile = ({ id } = { id: ":id" }) => `/Profile/${id}`;