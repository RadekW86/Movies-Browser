import { delay, put, call, takeLatest } from "redux-saga/effects"
import { fetchMoviesError, fetchMoviesLoading, fetchMoviesSuccess } from "./moviesSlice";
import { getMoviesList } from "./getMoviesList";


const DELAY_ACTION = 1000;

function* watchFetchMoviesHandler({payload: page}) {
    try {
        yield delay(DELAY_ACTION);
        const movies = yield call(getMoviesList, page);
        yield put(fetchMoviesSuccess(movies));
    } catch (error) {
        yield put(fetchMoviesError())
    }
};

export function* watchFetchMovies() {
    yield takeLatest(fetchMoviesLoading.type, watchFetchMoviesHandler)
};