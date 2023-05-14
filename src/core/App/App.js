
import { Container } from "../../common/Container/styled";
import { Section } from "../../common/Section";
import { Error } from "../../common/content/Error";
import { Loading } from "../../common/content/Loading";
import { NoResults } from "../../common/content/NoResults";
import { BasicTile } from "../../common/content/BasicTile/index"
import { MainTile } from "../../common/content/MainTile";
import moviesList from "./exmapleMovies.json";
import personDetails from "./examplePersonDetails.json";
import movieDetails from "./exampleMovieDetails.json";
import poster from "../../common/images/poster .png";

export const App = () => (
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
    >
    </Section>
    <Section
      title="Popular Person"
      content={
        <MainTile
          poster={poster}
          name={personDetails.name}
          firstInformation={personDetails.birthday}
          secondInformation={personDetails.place_of_birth}
          description={personDetails.biography}
        />
      }
    ></Section>
    <Section
      title={"Search results for “Mulan”"}
      content={<Loading />}
    />

);


