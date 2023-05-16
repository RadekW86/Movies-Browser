import { configureStore } from "@reduxjs/toolkit";
import moviesReducers from "../features/movies/moviesSlice"
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        movies: moviesReducers,
    },
    middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga);