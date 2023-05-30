import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "moviesList",

  initialState: {
    movies: [],
  },

  reducers: {
    fetchMoviesLoading: () => ({
      moviesState: "loading",
    }),
    fetchMoviesSuccess: (_, { payload: movies }) => ({
      moviesState: "success",
      movies: movies.results,
      resultsPage: movies.page,
      totalPages: movies.total_pages,
      totalResults: movies.total_results,
    }),
    fetchMoviesError: () => ({
      moviesState: "error",
    }),
  },
});

export const { fetchMoviesLoading, fetchMoviesSuccess, fetchMoviesError } =
  moviesSlice.actions;

export const selectMoviesSlice = (state) => state.moviesList;
export const selectMoviesState = (state) => selectMoviesSlice(state).moviesState;
export const selectMovies = (state) => selectMoviesSlice(state).movies;
export const selectResultsPage = (state) => selectMoviesSlice(state).resultsPage;
export const selectTotalPages = (state) => selectMoviesSlice(state).totalPages;
export const selectTotalResults = (state) => selectMoviesSlice(state).totalResults;

export default moviesSlice.reducer;
