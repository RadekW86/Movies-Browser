import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
    },
    reducers: {
        fetchMoviesLoading: () => ({
            moviesState: "loading"
        }),
        fetchMoviesSuccess: (_, { payload: movies }) => ({
            moviesState: "success",
            movies,
        }),
        fetchMoviesError: () => ({
            moviesState: "error"
        }),
    },
});

export const {
    fetchMoviesLoading,
    fetchMoviesSuccess,
    fetchMoviesError
} = movieSlice.actions;

export const selectMoviesSlice = (state) => state.movies;
export const selectMovies = (state) => selectMoviesSlice(state).movies;
export const selectMoviesState = (state) => selectMoviesSlice(state).moviesState;

export default movieSlice.reducer;
