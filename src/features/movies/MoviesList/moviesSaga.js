import { put, call, takeLatest } from "redux-saga/effects";
import {
  fetchMoviesError,
  fetchMoviesLoading,
  fetchMoviesSuccess,
} from "./moviesSlice";
import { getMoviesList } from "../getMovies";

function* watchFetchMoviesHandler({ payload: page }) {
  try {
    const movies = yield call(getMoviesList, page);
    yield put(fetchMoviesSuccess(movies));
  } catch (error) {
    yield put(fetchMoviesError());
  }
}

export function* watchFetchMovies() {
  yield takeLatest(fetchMoviesLoading.type, watchFetchMoviesHandler);
}
