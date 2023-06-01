import { put, call, takeLatest, select } from "redux-saga/effects";
import {
  fetchPeopleError,
  fetchPeopleLoading,
  fetchPeopleSuccess,
} from "./peopleSlice";
import { useGetAPI } from "../../../common/getAPI";
import { selectEngaged } from "../../../TopBar/Search/searchSlice";

function* watchFetchPeopleHandler({ payload: page }) {
  const engaged = yield select(selectEngaged);
  if (!engaged) {
    try {
      const people = yield call(useGetAPI, "peopleList", page);
      yield put(fetchPeopleSuccess(people));
    } catch (error) {
      yield put(fetchPeopleError());
    }
  } else {
  }
}

export function* watchFetchPeople() {
  yield takeLatest(fetchPeopleLoading.type, watchFetchPeopleHandler);
}
