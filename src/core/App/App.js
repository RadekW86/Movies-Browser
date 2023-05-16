import {
  HashRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min";
import { toMovies, toPeople, toMovie, toProfile, toExtras } from "../routes";
import { TopBar } from "../../common/TopBar";
import { MoviesList } from "../../features/movies/MoviesList";
import { PeopleList } from "../../features/people/PeopleList";
import { MoviePage } from "../../features/movies/MoviePage";
import { Profile } from "../../features/people/Profile";
import { WorkSpace } from "../../WorkSpace";

export const App = () => (
  <HashRouter>
    <TopBar />

    <Switch>
      <Route path={toMovies()}>
        <MoviesList />
      </Route>
      <Route path={toPeople()}>
        <PeopleList />
      </Route>
      <Route path={toMovie()}>
        <MoviePage />
      </Route>
      <Route path={toProfile()}>
        <Profile />
      </Route>
      <Route path={toExtras}>
        <WorkSpace />
      </Route>
      <Route>
        <Redirect to={toMovies()} />
      </Route>
    </Switch>
  </HashRouter>
);
