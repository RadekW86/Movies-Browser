import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "moviesList",

  initialState: {
    movies: [],
    page: 1,
  },

  reducers: {
    fetchMoviesLoading: () => ({
      moviesState: "loading",
    }),
    fetchMoviesSuccess: (_, { payload: movies }) => ({
      moviesState: "success",
      movies: movies.results,
      page: movies.page,
    }),
    fetchMoviesError: () => ({
      moviesState: "error",
    }),
  },
});

export const { fetchMoviesLoading, fetchMoviesSuccess, fetchMoviesError } =
  moviesSlice.actions;

export const selectMoviesSlice = (state) => state.moviesList;
export const selectMovies = (state) => selectMoviesSlice(state).movies;
export const selectPage = (state) => selectMoviesSlice(state).page;
export const selectMoviesState = (state) => selectMoviesSlice(state).moviesState;

export default moviesSlice.reducer;
