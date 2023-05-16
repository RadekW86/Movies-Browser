import { Container } from "../common/Container/styled";
import { Section } from "../common/Section";
import { MainTile } from "../common/content/MainTile";
import { NoResults } from "../common/content/NoResults";
import { Error } from "../common/content/Error";
import { Loading } from "../common/content/Loading";
import poster from "../images/poster.png";
import face from "../images/face.png";
import personDetails from "../core/App/examplePersonDetails.json";
import movieDetails from "../core/App/exampleMovieDetails.json";
import { StyledBr } from "./styled";

export const WorkSpace = () => (
  <Container>
    <Section
      title="Popular Movies"
      content={
        <MainTile
          movie
          poster={poster}
          name={movieDetails.title}
          productionYear={movieDetails.release_date}
          firstInformation={movieDetails.production_countries[0].name}
          secondInformation={movieDetails.release_date}
          genres={movieDetails.genres}
          rate={movieDetails.vote_average}
          votes={movieDetails.vote_count}
          description={movieDetails.overview}
        />
      }
    ></Section>
    <StyledBr />
    <Section
      title="Popular Person"
      content={
        <MainTile
          poster={face}
          name={personDetails.name}
          firstInformation={personDetails.birthday}
          secondInformation={personDetails.place_of_birth}
          description={personDetails.biography}
        />
      }
    ></Section>
    <StyledBr />
    <Section
      fullpage
      title={"Search results for “Mulan”"}
      content={<Loading />}
    />
    <StyledBr />
    <Section
      fullpage
      title={"Sorry, there are no results for “Muan”"}
      content={<NoResults />}
    />
    <StyledBr />
    <Section fullpage content={<Error />} />
  </Container>
);
