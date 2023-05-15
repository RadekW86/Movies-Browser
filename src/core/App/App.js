import { Container } from "../../common/Container/styled";
import { TopBar } from "../../common/TopBar";
import { MoviesList } from "../../features/movies/MoviesList";
import { MoviePage } from "../../features/movies/MoviePage";

export const App = () => (
  <>
    <TopBar />
    <Container>
      <MoviesList />
      <MoviePage />
    </Container >
  </>
);