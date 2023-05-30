import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "peopleList",

  initialState: {
    people: [],
  },

  reducers: {
    fetchPeopleLoading: () => ({
      peopleState: "loading",
    }),
    fetchPeopleSuccess: (_, { payload: people }) => ({
      peopleState: "success",
      people: people.results,
      resultsPage: people.page,
      totalPages: people.total_pages,
      totalResults: people.total_results,
    }),
    fetchPeopleError: () => ({
      peopleState: "error",
    }),
  },
});

export const { fetchPeopleLoading, fetchPeopleSuccess, fetchPeopleError } =
  peopleSlice.actions;

export const selectPeopleSlice = (state) => state.peopleList;
export const selectPeopleState = (state) => selectPeopleSlice(state).peopleState;
export const selectPeople = (state) => selectPeopleSlice(state).people;
export const selectResultsPage = (state) => selectPeopleSlice(state).resultsPage;
export const selectTotalPages = (state) => selectPeopleSlice(state).totalPages;
export const selectTotalResults = (state) => selectPeopleSlice(state).totalResults;

export default peopleSlice.reducer;
