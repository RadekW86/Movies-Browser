import { put, call, takeLatest } from "redux-saga/effects";
import {
  fetchMoviePageLoading,
  fetchMoviePageSuccess,
  fetchMoviePageError,
  fetchMovieCreditsSuccess,
} from "./moviePageSlice";
import { getMovie, getMovieCredits } from "../getMovies";

function* watchFetchMoviePageHandler({ payload: movie_id }) {
  try {
    const movie = yield call(getMovie, movie_id);
    const movieCredits = yield call(getMovieCredits, movie_id);
    yield put(fetchMoviePageSuccess(movie));
    yield put(fetchMovieCreditsSuccess(movieCredits));
  } catch (error) {
    yield put(fetchMoviePageError());
  }
}

export function* watchFetchMoviePage() {
  yield takeLatest(fetchMoviePageLoading.type, watchFetchMoviePageHandler);
}
