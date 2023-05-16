import { Section } from "../../../common/Section";
import { BasicTile } from "../../../common/content/BasicTile";
import { MainTile } from "../../../common/content/MainTile";
import poster from "../../../common/images/poster.png";
import movieDetails from "../../../core/App/exampleMovieDetails.json";
import peopleList from "../../../core/App/examplePeople.json";

export const MoviePage = () => (
    <>
        <Section
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
        />
        <Section
            people
            title="Cast"
            content={peopleList.map((person) => (
                <BasicTile
                    key={person.id}
                    poster={poster}
                    name={person.name}
                    productionInF="Mulan"
                />
            ))}
        />
        <Section
            people
            title="Crew"
            content={peopleList.map((person) => (
                <BasicTile
                    key={person.id}
                    poster={poster}
                    name={person.name}
                    productionInF="Mulan"
                />
            ))}
        />
    </>
);