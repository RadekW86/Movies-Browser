export const toMovies = () => "/Movies";
export const toPeople = () => "/People";
export const toExtras = () => "/Extras";

export const toMovie = ( {id} = {id: ":id"}) => `/Movies/${id}`;
export const toProfile = ( {id} = {id: ":id"}) => `/People/${id}`;