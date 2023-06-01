import { createSlice } from "@reduxjs/toolkit";

const movieGenresSlice = createSlice({
  name: "movieGenres",
  
  initialState: {
    genres: [],
  },

  reducers: {
    fetchMovieGenresLoading: () => ({
      movieGenreState: "loading",
    }),
    fetchMovieGenresSuccess: (_, { payload: genres }) => ({
      movieGenreState: "success",
      genres: genres.genres,
    }),
    fetchMovieGenresError: () => ({
      movieGenreState: "error",
    }),
  },
});

export const {
  fetchMovieGenresLoading,
  fetchMovieGenresSuccess,
  fetchMovieGenresError,
} = movieGenresSlice.actions;

export const selectMovieGenresSlice = (state) => state.movieGenres;
export const selectMovieGenresState = (state) => selectMovieGenresSlice(state).movieGenreState;
export const selectMovieGenres = (state) => selectMovieGenresSlice(state).genres;

export default movieGenresSlice.reducer;
