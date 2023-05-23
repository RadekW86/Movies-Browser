import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profilePage",

  initialState: {
    profile: {},
    profileCredits: {},
  },

  reducers: {
    fetchProfileLoading: () => ({
      profileState: "loading",
    }),
    fetchProfileSuccess: (_, { payload: profile }) => ({
      profileState: "success",
      profile,
    }),
    fetchProfileError: () => ({
      profileState: "error",
    }),
    fetchProfileCreditsSuccess: (state, { payload: profileCredits }) => ({
      ...state,
      profileCreditsState: "success",
      profileCredits,
    }),
  },
});

export const {
  fetchProfileLoading,
  fetchProfileSuccess,
  fetchProfileError,
  fetchProfileCreditsSuccess,
} = profileSlice.actions;

export const selectProfileSlice = (state) => state.profilePage;
export const selectProfile = (state) => selectProfileSlice(state).profile;
export const selectProfileState = (state) => selectProfileSlice(state).profileState;

export const selectProfileCredits = (state) => selectProfileSlice(state).profileCredits;
export const selectProfileCreditsState = (state) => selectProfileSlice(state).profileCreditsState;

export default profileSlice.reducer;
