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
import { selectEngaged, selectPage, selectQuery, selectSearchType, setQuery } from "./searchSlice";
import { call, put, select, throttle } from "redux-saga/effects";
{
}

function* watchSearchHandler() {
  const searchType = yield select(selectSearchType);
  const userQuery = yield select(selectQuery);
  const page = yield select(selectPage);
  const engaged = yield select(selectEngaged);

  if (engaged) {
    if (searchType === "movies") {
      try {
        yield put(fetchMoviesLoading());
        const movies = yield call(useGetAPI, "moviesSearch", page, userQuery);
        yield put(fetchMoviesSuccess(movies));
      } catch (error) {
        yield put(fetchMoviesError());
      }
    } else {
      try {
        yield put(fetchPeopleLoading());
        const movies = yield call(useGetAPI, "peopleSearch", page, userQuery);
        yield put(fetchPeopleSuccess(movies));
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
