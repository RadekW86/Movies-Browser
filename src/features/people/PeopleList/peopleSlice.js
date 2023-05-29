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
    }),
    fetchPeopleError: () => ({
      peopleState: "error",
    }),
  },
});

export const { fetchPeopleLoading, fetchPeopleSuccess, fetchPeopleError } =
  peopleSlice.actions;

export const selectPeopleSlice = (state) => state.peopleList;
export const selectPeople = (state) => selectPeopleSlice(state).people;
export const selectResultsPage = (state) => selectPeopleSlice(state).resultsPage;
export const selectPeopleState = (state) => selectPeopleSlice(state).peopleState;

export default peopleSlice.reducer;
