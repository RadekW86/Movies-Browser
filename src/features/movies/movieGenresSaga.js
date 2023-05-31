import { takeLatest, put, call } from "redux-saga/effects";
import {
  fetchMovieGenresError,
  fetchMovieGenresLoading,
  fetchMovieGenresSuccess,
} from "./movieGenresSlice";
import { useGetAPI } from "../../common/getAPI";
import { fetchMoviesError } from "./MoviesList/moviesSlice";

function* watchFetchMovieGenresHandler() {
  try {
    const movieGenres = yield call(useGetAPI, "movieGenres");
    yield put(fetchMovieGenresSuccess(movieGenres));
  } catch (error) {
    yield put(fetchMovieGenresError());
    yield put(fetchMoviesError());
  }
}

export function* watchFetchMovieGenres() {
  yield takeLatest(fetchMovieGenresLoading.type, watchFetchMovieGenresHandler);
}
