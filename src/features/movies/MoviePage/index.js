import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";
import { Loading } from "../../../common/content/Loading";
import { Error } from "../../../common/content/Error";
import { Section } from "../../../common/Section";
import { Container } from "../../../common/Container/styled";
import { BasicTile } from "../../../common/content/BasicTile";
import { MovieBanner } from "./MovieBanner";
import {
  fetchMoviePageLoading,
  selectMovieCredits,
  selectMovieCreditsState,
  selectMoviePage,
} from "./moviePageSlice";
import { selectMoviePageState } from "./moviePageSlice";
import { MainTile } from "../../../common/content/MainTile";

export const MoviePage = () => {
  const moviePage = useSelector(selectMoviePage);
  const moviePageState = useSelector(selectMoviePageState);
  const movieCredits = useSelector(selectMovieCredits);
  const movieCreditsState = useSelector(selectMovieCreditsState);
  const dispatch = useDispatch();
  const params = useParams();
  const movie_id = params.id;

  useEffect(() => {
    dispatch(fetchMoviePageLoading(movie_id));
  }, [movie_id]);

  switch (moviePageState) {
    case "loading":
      return <Section fullpage content={<Loading />} />;
    case "error":
      return <Section fullpage content={<Error />} />;
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
                fullpage
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
                    poster={actor.profile_path}
                    name={actor.name}
                    productionInF={actor.character}
                  ></BasicTile>
                ))}
              />
              <Section
                people
                title="Crew"
                content={movieCredits.crew.map((actor) => (
                  <BasicTile
                    key={nanoid()}
                    poster={actor.profile_path}
                    name={actor.name}
                    productionInF={actor.job}
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
