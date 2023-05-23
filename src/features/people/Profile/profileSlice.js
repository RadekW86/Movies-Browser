import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profilePage",

  initialState: {
    profile: {},
    details: {},
  },

  reducers: {
    fetchProfileLoading: () => ({
      profileState: "loading",
    }),
    fetchProfileSuccess: (state, { payload: profile }) => ({
      ...state,
      profileState: "success",
      profile: profile,
      id: profile.id,
    }),
    fetchProfileError: () => ({
      profileState: "error",
    }),
    fetchProfileDetailsLoading: () => ({
      profileDetailsState: "loading",
    }),
    fetchProfileDetailsSuccess: (state, { payload: details }) => ({
      ...state,
      profileDetailsState: "success",
      details: details,
      id: details.id,
    }),
    fetchProfileDetailsError: () => ({
      profileDetailsState: "error",
    }),
  },
});

export const {
  fetchProfileLoading,
  fetchProfileSuccess,
  fetchProfileError,
  fetchProfileDetailsLoading,
  fetchProfileDetailsSuccess,
  fetchProfileDetailsError,
} = profileSlice.actions;

export const selectProfileSlice = (state) => state.profilePage;
export const selectProfile = (state) => selectProfileSlice(state).profile;
export const selectProfileState = (state) => selectProfileSlice(state).profileState;

export const selectProfileDetails = (state) => selectProfileSlice(state).details;
export const selectProfileDetailsState = (state) => selectProfileSlice(state).profileDetailsState;

export default profileSlice.reducer;
