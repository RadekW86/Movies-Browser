import { Container } from "../../common/Container/styled";
import { Section } from "../../common/Section";
import { Error } from "../../common/content/Error";
import { Loading } from "../../common/content/Loading";
import { NoResults } from "../../common/content/NoResults";
import { BasicTile } from "../../common/content/BasicTile/index"
import { MainTile } from "../../common/content/MainTile";
import moviesList from "./exmapleMovies.json"
import peopleList from "./examplePeople.json"
import poster from "../../common/images/poster .png"

export const App = () => (
  <Container>
    <Section
      title="Popular Movies"
      content={
        <MainTile
          movie
          poster={poster}
          name="Mulam"
          productionInf="2022"
          firstInformation="05.09.1990"
          secondInformation="China"
          genre="lalal"
          rate="lalal"
          votes="lalal"
          description="A young Chinese maiden disguises herself as a male warrior in order to save her father. Disguises herself as a male warrior in order to save her father. A young Chinese maiden disguises herself as a male warrior in order to save her father."
        />
      }
    >
    </Section>
    <Section
      title="Popular Movies"
      content={
        <MainTile
          movie
          poster={false}
          name="Mulam"
          productionInf="2022"
          firstInformation="China"
          secondInformation="05.09.1990"
          genre="lalal"
          rate="lalal"
          votes="lalal"
          description="A young Chinese maiden disguises herself as a male warrior in order to save her father. Disguises herself as a male warrior in order to save her father. A young Chinese maiden disguises herself as a male warrior in order to save her father."
        />
      }
    ></Section>
    <Section
      title="Popular Movies"
      content={
        <MainTile
          poster={poster}
          name="Mulam"
          productionInf="2022"
          firstInformation="China"
          secondInformation="05.09.1990"
          genre="lalal"
          rate="lalal"
          votes="lalal"
          description="A young Chinese maiden disguises herself as a male warrior in order to save her father. Disguises herself as a male warrior in order to save her father. A young Chinese maiden disguises herself as a male warrior in order to save her father."
        />
      }
    ></Section>
    <Section
      title={"Search results for “Mulan”"}
      content={<Loading />}
    />
    <Section
      title={"Sorry, there are no results for “Muan”"}
      content={<NoResults />}
    />
    <Section
      content={<Error />}
    />
    <Section
      movies
      title="Popular Movies"
      content={moviesList.map((movie) => (
        <BasicTile
          movie
          key={movie.id}
          poster={false}
          name={movie.name}
          productionInF={movie.year}
          genre={movie.genre}
          rate={movie.rate}
          votes={movie.votes}
        />
      ))}
    >
    </Section>
    <Section
      people
      title="Popular People"
      content={peopleList.map((movie) => (
        <BasicTile
          key={movie.id}
          poster={false}
          name={movie.name}
          productionInF={movie.year}
          genre={movie.genre}
          rate={movie.rate}
          votes={movie.votes}
        />
      ))}
    >
    </Section>
  </Container>
);


