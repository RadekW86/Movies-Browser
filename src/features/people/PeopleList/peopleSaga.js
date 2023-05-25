import { put, call, takeLatest } from "redux-saga/effects";
import {
  fetchPeopleError,
  fetchPeopleLoading,
  fetchPeopleSuccess,
} from "./peopleSlice";
import { useGetAPI } from "../../../common/getAPI";

function* watchFetchPeopleHandler({ payload: page }) {
  try {
    const people = yield call(useGetAPI, "peopleList", page);
    yield put(fetchPeopleSuccess(people));
  } catch (error) {
    yield put(fetchPeopleError());
  }
}

export function* watchFetchPeople() {
  yield takeLatest(fetchPeopleLoading.type, watchFetchPeopleHandler);
}
