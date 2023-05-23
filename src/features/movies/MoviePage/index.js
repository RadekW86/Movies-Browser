import { Container } from "../../../common/Container/styled";
import { Section } from "../../../common/Section";
import { MovieBanner } from "./MovieBanner";
import { MainTile } from "../../../common/content/MainTile";
import { BasicTile } from "../../../common/content/BasicTile";
import { nanoid } from "@reduxjs/toolkit";
import { Loading } from "../../../common/content/Loading";
import { Error } from "../../../common/content/Error";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  selectMoviePage,
  selectMoviePageState,
  selectMovieCredits,
  selectMovieCreditsState,
  fetchMoviePageLoading,
} from "./moviePageSlice";

export const MoviePage = () => {
  const params = useParams();
  const movie_id = params.id;
  const moviePage = useSelector(selectMoviePage);
  const moviePageState = useSelector(selectMoviePageState);
  const movieCredits = useSelector(selectMovieCredits);
  const movieCreditsState = useSelector(selectMovieCreditsState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviePageLoading(movie_id));
  }, []);

  switch (moviePageState) {
    case "loading":
      return (
        <Container>
          <Section fullpage content={<Loading />} />
        </Container>
      );
    case "error":
      return (
        <Container>
          <Section fullpage content={<Error />} />
        </Container>
      );
    case "success": {
      if (movieCreditsState === "success") {
        return (
          <>
            <MovieBanner
              movieTitle={moviePage.original_title}
              rate={moviePage.vote_average}
              votes={moviePage.vote_count}
              srcBackDrop={moviePage.backdrop_path}
            />
            <Container>
              <Section
                content={
                  <MainTile
                    movie
                    name={moviePage.original_title}
                    poster={moviePage.poster_path}
                    productionYear={moviePage.release_date}
                    description={moviePage.overview}
                    secondInformation={moviePage.release_date}
                    genres={moviePage.genres}
                    rate={moviePage.vote_average}
                    votes={moviePage.vote_count}
                  />
                }
              />
              <Section
                people
                title="Cast"
                content={movieCredits.cast.map((actor) => (
                  <BasicTile
                    key={nanoid()}
                    name={actor.name}
                    poster={actor.profile_path}
                    productionInF={actor.character}
                    id={actor.id}
                  ></BasicTile>
                ))}
              />
              <Section
                people
                title="Crew"
                content={movieCredits.crew.map((actor) => (
                  <BasicTile
                    key={nanoid()}
                    name={actor.name}
                    poster={actor.profile_path}
                    productionInF={actor.job}
                    id={actor.id}
                  ></BasicTile>
                ))}
              />
            </Container>
          </>
        );
      }
    }
  }
};
