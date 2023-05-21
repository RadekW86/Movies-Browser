import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profilePage",

  initialState: {
    profile: {},
  },

  reducers: {
    fetchProfileLoading: () => ({
      profileState: "loading",
    }),
    fetchProfileSuccess: (_, { payload: profile }) => ({
      profileState: "success",
      profile: profile,
      id: profile.id,
    }),
    fetchProfileError: () => ({
      profileState: "error",
    }),
  },
});

export const { fetchProfileLoading, fetchProfileSuccess, fetchProfileError } =
  profileSlice.actions;

export const selectProfileSlice = (state) => state.profilePage;
export const selectProfile = (state) => selectProfileSlice(state).profile;
export const selectProfileState = (state) => selectProfileSlice(state).profileState;
export const selectProfileId = (state) => selectProfileSlice(state).id;

export default profileSlice.reducer;
