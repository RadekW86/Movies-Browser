import { put, call, takeLatest, delay } from "redux-saga/effects";
import {
  fetchMoviePageLoading,
  fetchMoviePageSuccess,
  fetchMoviePageError,
  fetchMovieCreditsSuccess,
} from "./moviePageSlice";
import { useGetAPI } from "../../../common/getAPI";

function* watchFetchMoviePageHandler({ payload: movie_id }) {
  try {
    yield delay(1);
    const movie = yield call(useGetAPI, "movie", movie_id);
    const movieCredits = yield call(useGetAPI, "movieCredits", movie_id);
    yield put(fetchMoviePageSuccess(movie));
    yield put(fetchMovieCreditsSuccess(movieCredits));
  } catch (error) {
    yield put(fetchMoviePageError());
  }
}

export function* watchFetchMoviePage() {
  yield takeLatest(fetchMoviePageLoading.type, watchFetchMoviePageHandler);
}
