import { Container } from "../../../common/Container/styled";
import { Section } from "../../../common/Section";
import { MainTile } from "../../../common/content/MainTile";
import { Loading } from "../../../common/content/Loading";
import { Error } from "../../../common/content/Error";
import { useSelector } from "react-redux";
import { selectProfile, selectProfileState } from "../profileSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { fetchProfileLoading } from "../profileSlice";

export const Profile = () => {
  const profileState = useSelector(selectProfileState);
  const profile = useSelector(selectProfile);
  const dispatch = useDispatch();
  const id = useParams();

  useEffect(() => {
    dispatch(fetchProfileLoading(id.id));
  }, []);

  switch (profileState) {
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
              <MainTile
                poster={
                  "https://image.tmdb.org/t/p/w500//" + profile.profile_path
                }
                name={profile.name}
                firstInformation={profile.birthday}
                secondInformation={profile.place_of_birth}
                description={profile.biography}
              />
            }
          />
        </Container>
      );
  }
};
