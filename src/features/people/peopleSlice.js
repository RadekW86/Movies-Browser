import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "peopleList",

  initialState: {
    people: [],
    page: 1,
  },

  reducers: {
    fetchPeopleLoading: () => ({
      peopleState: "loading",
    }),
    fetchPeopleSuccess: (_, { payload: people }) => ({
      peopleState: "success",
      people: people.results,
      page: people.page,
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
export const selectPeopleState = (state) =>
  selectPeopleSlice(state).peopleState;
export const selectPage = (state) => selectPeopleSlice(state).page;

export default peopleSlice.reducer;
