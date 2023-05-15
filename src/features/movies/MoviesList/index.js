import { Container } from "../../../common/Container/styled";
import { Section } from "../../../common/Section";
import { BasicTile } from "../../../common/content/BasicTile";
import moviesList from "../../../core/App/exmapleMovies.json";
import poster from "../../../common/images/poster.png";
import { Pagination } from "../../../common/Pagination";

export const MoviesList = () => (
  <Container>
    <Section
    fullpage
      movies
      title="Popular Movies"
      content={moviesList.map((movie) => (
        <BasicTile
          movie
          key={movie.id}
          poster={poster}
          name={movie.title}
          productionInF={movie.release_date}
          genres={movie.genre_ids}
          rate={movie.vote_average}
          votes={movie.vote_count}
        />
      ))}
      foot={<Pagination />}
    ></Section>
  </Container>
);
