import { watchFetchMovies } from "../features/movies/moviesSaga"
import { watchFetchPeople } from "../features/people/PeopleList/peopleSaga";
import { watchFetchProfile } from "../features/people/Profile/profileSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
    yield all([
        watchFetchMovies(),
        watchFetchPeople(),
        watchFetchProfile(),
    ]);
};