import { all } from "redux-saga/effects";
import { watchFetchMovies } from "../features/movies/MoviesList/moviesSaga";
import { watchFetchMoviePage } from "../features/movies/MoviePage/moviePageSaga";
import { watchFetchPeople } from "../features/people/PeopleList/peopleSaga";
import { watchFetchProfile } from "../features/people/Profile/profileSaga";
import { watchSearch } from "../TopBar/Search/searchSaga";
import { watchFetchMovieGenres } from "../features/movies/movieGenresSaga";
import { all } from "redux-saga/effects";


export default function* rootSaga() {
  yield all([
    watchFetchMovies(),
    watchFetchMoviePage(),
    watchFetchPeople(),
    watchFetchProfile(),
    watchSearch(),
    watchFetchMovieGenres(),
  ]);
}
