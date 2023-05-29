import { put, call, takeLatest, delay } from "redux-saga/effects";
import {
  fetchMoviesError,
  fetchMoviesLoading,
  fetchMoviesSuccess,
} from "./moviesSlice";
import { useGetAPI } from "../../../common/getAPI";

function* watchFetchMoviesHandler({ payload: page }) {
  try {
    yield delay(1);
    const movies = yield call(useGetAPI, "moviesList", page);
    yield put(fetchMoviesSuccess(movies));
  } catch (error) {
    yield put(fetchMoviesError());
  }
}

export function* watchFetchMovies() {
  yield takeLatest(fetchMoviesLoading.type, watchFetchMoviesHandler);
}
