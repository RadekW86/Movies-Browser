import { watchFetchMovies } from "../features/movies/MoviesList/moviesSaga";
import { watchFetchPeople } from "../features/people/peopleSaga";
import { watchFetchMoviePage } from "../features/movies/MoviePage/moviePageSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([
    watchFetchMovies(), 
    watchFetchMoviePage(), 
    watchFetchPeople()
]);
};
