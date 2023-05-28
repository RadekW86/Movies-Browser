import { createSlice } from "@reduxjs/toolkit";

const searchModuleSlice = createSlice({
  name: "searchModule",

  initialState: {},

  reducers: {
    setSearchTypeMovie: () => ({
      searchType: "movies",
    }),
    setSearchTypeProfile: () => ({
      searchType: "people",
    }),
  },
});

export const { setSearchTypeMovie, setSearchTypeProfile } =
  searchModuleSlice.actions;

export const selectSearchModuleSlice = (state) => state.searchModule;
export const selectSearchType = (state) => selectSearchModuleSlice(state).searchType;

export default searchModuleSlice.reducer;
