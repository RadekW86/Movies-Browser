import {
  HashRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min";
import { toMovies, toPeople, toMovie, toProfile } from "../routes";
import { TopBar } from "../../TopBar";
import { MoviesList } from "../../features/movies/MoviesList";
import { PeopleList } from "../../features/people/PeopleList";
import { MoviePage } from "../../features/movies/MoviePage";
import { Profile } from "../../features/people/Profile";

export const App = () => (
  <HashRouter>
    <TopBar />

    <Switch>
      <Route path={toMovies()}>
        <MoviesList />
      </Route>
      <Route path={toMovie()}>
        <MoviePage />
      </Route>
      <Route path={toPeople()}>
        <PeopleList />
      </Route>
      <Route path={toProfile()}>
        <Profile />
      </Route>
      <Route>
        <Redirect to={toMovies()} />
      </Route>
    </Switch>
  </HashRouter>
);
