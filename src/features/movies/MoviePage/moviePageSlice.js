import { createSlice } from "@reduxjs/toolkit";

const moviePageSlice = createSlice({
  name: "moviePage",

  initialState: {
    movie: {},
    movieCredits: {},
  },

  reducers: {
    fetchMoviePageLoading: () => ({
      movieState: "loading",
    }),
    fetchMoviePageSuccess: (_, { payload: movie }) => ({
      movieState: "success",
      movie,
    }),
    fetchMoviePageError: () => ({
      movieState: "error",
    }),
    fetchMovieCreditsSuccess: (state, { payload: movieCredits }) => ({
      ...state,
      movieCreditsState: "success",
      movieCredits,
    }),
  },
});

export const {
  fetchMoviePageLoading,
  fetchMoviePageSuccess,
  fetchMoviePageError,
  fetchMovieCreditsSuccess,
} = moviePageSlice.actions;

export const selectMoviePageSlice = (state) => state.moviePage;
export const selectMoviePage = (state) => selectMoviePageSlice(state).movie;
export const selectMoviePageState = (state) => selectMoviePageSlice(state).movieState;

export const selectMovieCredits = (state) => selectMoviePageSlice(state).movieCredits;
export const selectMovieCreditsState = (state) => selectMoviePageSlice(state).movieCreditsState;

export default moviePageSlice.reducer;
