import { Container } from "../../../common/Container/styled";
import { Section } from "../../../common/Section";
import { MainTile } from "../../../common/content/MainTile";
import { BasicTile } from "../../../common/content/BasicTile";
import { nanoid } from "@reduxjs/toolkit";
import { Loading } from "../../../common/content/Loading";
import { Error } from "../../../common/content/Error";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector, useDispatch } from "react-redux";
import {
  selectProfile,
  selectProfileState,
  selectProfileCredits,
  selectProfileCreditsState,
  fetchProfileLoading,
} from "./profileSlice";
import { useEffect } from "react";

export const Profile = () => {
  const params = useParams();
  const profile_id = params.id;
  const profile = useSelector(selectProfile);
  const profileState = useSelector(selectProfileState);
  const profileCredits = useSelector(selectProfileCredits);
  const profileCreditsState = useSelector(selectProfileCreditsState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfileLoading(profile_id));
  }, []);

  switch (profileState) {
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
    case "success":
      if (profileCreditsState === "success") {
        return (
          <Container>
            <Section
              content={
                <MainTile
                  name={profile.name}
                  poster={profile.profile_path}
                  firstInformation={profile.birthday}
                  secondInformation={profile.place_of_birth}
                  description={profile.biography}
                />
              }
            />
            <Section
              movies
              title={"Movies - cast"}
              content={profileCredits.cast.map((movie) => (
                <BasicTile
                  movie
                  key={nanoid()}
                  name={movie.title}
                  poster={movie.poster_path}
                  productionInF={movie.release_date}
                  genres={movie.genre_ids}
                  rate={movie.vote_average}
                  votes={movie.vote_count}
                  id={movie.id}
                />
              ))}
            />
            <Section
              movies
              title={"Movies - crew"}
              content={profileCredits.crew.map((movie) => (
                <BasicTile
                  movie
                  key={nanoid()}
                  name={movie.title}
                  poster={movie.poster_path}
                  productionInF={movie.release_date}
                  genres={movie.genre_ids}
                  rate={movie.vote_average}
                  votes={movie.vote_count}
                  id={movie.id}
                />
              ))}
            />
          </Container>
        );
      }
  }
};
