import { Container } from "../../../common/Container/styled";
import { Section } from "../../../common/Section";
import { BasicTile } from "../../../common/content/BasicTile";
import moviesList from "../../../core/App/exmaplePeople.json";
import face from "../../../images/face.png";
import { Pagination } from "../../../common/Pagination";

export const PeopleList = () => (
  <Container>
    <Section
    fullpage
      people
      title="Popular People"
      content={moviesList.map((movie) => (
        <BasicTile
          key={movie.id}
          poster={face}
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
