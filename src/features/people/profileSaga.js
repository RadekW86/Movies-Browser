import { put, call, takeLatest } from "redux-saga/effects";
import {
  fetchProfileError,
  fetchProfileLoading,
  fetchProfileSuccess,
} from "./profileSlice";
import { getProfile } from "./getProfile";

function* watchFetchProfileHandler({ payload: id }) {
  try {
    const profile = yield call(getProfile, id);
    yield put(fetchProfileSuccess(profile));
  } catch (error) {
    yield put(fetchProfileError());
  }
}

export function* watchFetchProfile() {
  yield takeLatest(fetchProfileLoading.type, watchFetchProfileHandler);
}
