import { put, call, takeLatest } from "redux-saga/effects";
import {
  fetchMoviesError,
  fetchMoviesLoading,
  fetchMoviesSuccess,
} from "./moviesSlice";
import { useGetAPI } from "../../../common/getAPI";

function* watchFetchMoviesHandler({ payload: page }) {
  try {
    const movies = yield call(useGetAPI, "moviesList", page);
    yield put(fetchMoviesSuccess(movies));
  } catch (error) {
    yield put(fetchMoviesError());
  }
}

export function* watchFetchMovies() {
  yield takeLatest(fetchMoviesLoading.type, watchFetchMoviesHandler);
}
