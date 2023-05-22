import { configureStore } from "@reduxjs/toolkit";
import moviesReducers from "../features/movies/moviesSlice";
import peopleReducers from "../features/people/PeopleList/peopleSlice";
import profileReducers from "../features/people/Profile/profileSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    moviesList: moviesReducers,
    peopleList: peopleReducers,
    profilePage: profileReducers,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
