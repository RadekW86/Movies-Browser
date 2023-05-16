import { watchFetchMovies } from "../features/movies/moviesSaga"
import { all } from "redux-saga/effects";

export default function* rootSaga() {
    yield all([
        watchFetchMovies(),
    ]);
};