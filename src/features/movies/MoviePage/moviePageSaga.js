import { put, call, takeLatest, select, retry } from "redux-saga/effects";
import {
  fetchMoviePageLoading,
  fetchMoviePageSuccess,
  fetchMoviePageError,
  fetchMovieCreditsSuccess,
} from "./moviePageSlice";
import { useGetAPI } from "../../../common/getAPI";
import { selectMovieGenresState } from "../movieGenresSlice";

function* loader(movie_id) {
  const genresState = yield select(selectMovieGenresState);
  const genresOk = yield genresState === "success" ? true : false;
  if (genresOk) {
    const movie = yield call(useGetAPI, "movie", movie_id);
    const movieCredits = yield call(useGetAPI, "movieCredits", movie_id);
    yield put(fetchMoviePageSuccess(movie));
    yield put(fetchMovieCreditsSuccess(movieCredits));
  } else {
    throw new Error();
  }
}

function* watchFetchMoviePageHandler({ payload: movie_id }) {
  try {
    yield retry(100, 20, loader, movie_id);
  } catch (error) {
    yield put(fetchMoviePageError());
  }
}

export function* watchFetchMoviePage() {
  yield takeLatest(fetchMoviePageLoading.type, watchFetchMoviePageHandler);
}
