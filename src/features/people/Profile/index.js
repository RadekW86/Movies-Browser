import { Container } from "../../../common/Container/styled";
import { Section } from "../../../common/Section";
import { MainTile } from "../../../common/content/MainTile";
import { BasicTile } from "../../../common/content/BasicTile";
import { nanoid } from "@reduxjs/toolkit";
import { Loading } from "../../../common/content/Loading";
import { Error } from "../../../common/content/Error";
import { useSelector } from "react-redux";
import {
  fetchProfileDetailsLoading,
  selectProfile,
  selectProfileState,
  selectProfileDetails,
  selectProfileDetailsState,
} from "./profileSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { fetchProfileLoading } from "./profileSlice";

export const Profile = () => {
  const dispatch = useDispatch();
  const id = useParams();
  const profileState = useSelector(selectProfileState);
  const profile = useSelector(selectProfile);
  const profileDetailsState = useSelector(selectProfileDetailsState);
  const profileDetails = useSelector(selectProfileDetails);

  useEffect(() => {
    dispatch(fetchProfileLoading(id.id));
    dispatch(fetchProfileDetailsLoading(id.id));
  }, []);

  switch (profileState) {
    case "loading":
      return <Section fullpage content={<Loading />} />;
    case "error":
      return <Section fullpage content={<Error />} />;
    case "success": {
      switch (profileDetailsState) {
        case "loading":
          return <Section fullpage content={<Loading />} />;
        case "error":
          return <Section fullpage content={<Error />} />;
        case "success":
          return (
            <Container>
              <Section
                fullpage
                content={
                  <>
                    <MainTile
                      poster={
                        "https://image.tmdb.org/t/p/w500//" +
                        profile.profile_path
                      }
                      name={profile.name}
                      firstInformation={profile.birthday}
                      secondInformation={profile.place_of_birth}
                      description={profile.biography}
                    />
                    <Section
                      movies
                      title={"Movies - cast"}
                      content={profileDetails.cast.map((profileDetails) => (
                        <BasicTile
                          movie
                          key={nanoid()}
                          poster={profileDetails.poster_path}
                          name={profileDetails.title}
                          productionInF={profileDetails.release_date}
                          genres={profileDetails.genre_ids}
                          rate={profileDetails.vote_average}
                          votes={profileDetails.vote_count}
                          id={profileDetails.id}
                        />
                      ))}
                    />
                    <Section
                      movies
                      title={"Movies - crew"}
                      content={profileDetails.crew.map((profileDetails) => (
                        <BasicTile
                          movie
                          key={nanoid()}
                          poster={profileDetails.poster_path}
                          name={profileDetails.title}
                          productionInF={profileDetails.release_date}
                          genres={profileDetails.genre_ids}
                          rate={profileDetails.vote_average}
                          votes={profileDetails.vote_count}
                          id={profileDetails.id}
                        />
                      ))}
                    />
                  </>
                }
              />
            </Container>
          );
      }
    }
  }
};
