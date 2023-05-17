import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        page: 1,
    },
    reducers: {
        fetchMoviesLoading: () => ({
            moviesState: "loading",
            page: 1,
        }),
        fetchMoviesSuccess: (_, { payload: movies }) => ({
            moviesState: "success",
            movies: movies.results,
            page: movies.page,
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
export const selectPage = (state) => selectMoviesSlice(state).page;

export default movieSlice.reducer;
