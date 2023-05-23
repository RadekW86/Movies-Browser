import { put, call, takeLatest } from "redux-saga/effects";
import {
  fetchPeopleError,
  fetchPeopleLoading,
  fetchPeopleSuccess,
} from "./peopleSlice";
import { getPeopleList } from "./getPeopleList";

function* watchFetchPeopleHandler({ payload: page }) {
  try {
    const people = yield call(getPeopleList, page);
    yield put(fetchPeopleSuccess(people));
  } catch (error) {
    yield put(fetchPeopleError());
  }
}

export function* watchFetchPeople() {
  yield takeLatest(fetchPeopleLoading.type, watchFetchPeopleHandler);
}
