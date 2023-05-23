import { put, call, takeLatest } from "redux-saga/effects";
import {
  fetchProfileLoading,
  fetchProfileSuccess,
  fetchProfileError,
  fetchProfileCreditsSuccess,
} from "./profileSlice";
import { useGetAPI } from "../../../common/getAPI";

function* watchFetchProfileHandler({ payload: profile_id }) {
  try {
    const profile = yield call(useGetAPI, "profile", profile_id);
    const profileCredits = yield call(useGetAPI, "profileCredits", profile_id);
    yield put(fetchProfileSuccess(profile));
    yield put(fetchProfileCreditsSuccess(profileCredits));
  } catch (error) {
    yield put(fetchProfileError());
  }
}

export function* watchFetchProfile() {
  yield takeLatest(fetchProfileLoading.type, watchFetchProfileHandler);
}
