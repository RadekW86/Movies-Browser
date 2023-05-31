import { put, call, takeLatest, select, retry } from "redux-saga/effects";
import {
  fetchMoviesError,
  fetchMoviesLoading,
  fetchMoviesSuccess,
} from "./moviesSlice";
import { useGetAPI } from "../../../common/getAPI";
import { selectMovieGenresState } from "../movieGenresSlice";

function* loader(page) {
  const genresState = yield select(selectMovieGenresState);
  const genresOk = yield genresState === "success" ? true : false;
  if (genresOk) {
    const movies = yield call(useGetAPI, "moviesList", page);
    yield put(fetchMoviesSuccess(movies));
  } else {
    throw new Error();
  }
}

function* watchFetchMoviesHandler({ payload: page }) {
  try {
    yield retry(100, 20, loader, page);
  } catch (error) {
    yield put(fetchMoviesError());
  }
}

export function* watchFetchMovies() {
  yield takeLatest(fetchMoviesLoading.type, watchFetchMoviesHandler);
}
