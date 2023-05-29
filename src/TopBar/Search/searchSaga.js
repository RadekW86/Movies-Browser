import {
  fetchMoviesLoading,
  fetchMoviesSuccess,
  fetchMoviesError,
} from "../../features/movies/MoviesList/moviesSlice";
import {
  fetchPeopleLoading,
  fetchPeopleSuccess,
  fetchPeopleError,
} from "../../features/people/PeopleList/peopleSlice";
import { useGetAPI } from "../../common/getAPI";
import {
  selectEngaged,
  selectResultsPage,
  selectQuery,
  selectSearchType,
  setQuery,
} from "./searchSlice";
import { call, put, select, throttle } from "redux-saga/effects";

function* watchSearchHandler() {
  const searchType = yield select(selectSearchType);
  const userQuery = yield select(selectQuery);
  const resultsPage = yield select(selectResultsPage);
  const engaged = yield select(selectEngaged);

  if (engaged) {
    if (searchType === "movies") {
      try {
        yield put(fetchMoviesLoading());
        const movies = yield call(useGetAPI, "moviesSearch", resultsPage, userQuery);
        yield put(fetchMoviesSuccess(movies));
      } catch (error) {
        yield put(fetchMoviesError());
      }
    } else {
      try {
        yield put(fetchPeopleLoading());
        const people = yield call(useGetAPI, "peopleSearch", resultsPage, userQuery);
        yield put(fetchPeopleSuccess(people));
      } catch (error) {
        yield put(fetchPeopleError());
      }
    }
  } else {
  }
}

export function* watchSearch() {
  yield throttle(800, setQuery, watchSearchHandler);
}
