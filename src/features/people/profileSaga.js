import { put, call, takeLatest } from "redux-saga/effects";
import {
  fetchProfileError,
  fetchProfileLoading,
  fetchProfileSuccess,
  fetchProfileDetailsError,
  fetchProfileDetailsLoading,
  fetchProfileDetailsSuccess,
} from "./profileSlice";
import { getProfile, getProfileDetails } from "./getProfile";

function* watchFetchProfileHandler({ payload: id }) {
  try {
    const profile = yield call(getProfile, id);
    yield put(fetchProfileSuccess(profile));
  } catch (error) {
    yield put(fetchProfileError());
  }
}

function* watchFetchProfileDetailsHandler({ payload: id }) {
  try {
    const profileDetails = yield call(getProfileDetails, id);
    yield put(fetchProfileDetailsSuccess(profileDetails));
  } catch (error) {
    yield put(fetchProfileDetailsError());
  }
}

export function* watchFetchProfile() {
  yield takeLatest(fetchProfileLoading.type, watchFetchProfileHandler);
  yield takeLatest(fetchProfileDetailsLoading.type, watchFetchProfileDetailsHandler);
}
