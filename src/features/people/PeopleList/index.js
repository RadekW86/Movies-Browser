import { Container } from "../../../common/Container/styled";
import { Section } from "../../../common/Section";
import { BasicTile } from "../../../common/content/BasicTile";
import { Pagination } from "../../../common/Pagination";
import { Loading } from "../../../common/content/Loading";
import { Error } from "../../../common/content/Error";
import { useSelector } from "react-redux";
import {
  selectPeople,
  selectPeopleState,
  selectResultsPage,
  selectTotalPages,
  selectTotalResults,
} from "./peopleSlice";
import { useDispatch } from "react-redux";
import { useGetQueryParameter } from "../../../common/setQueryParameters";
import { useEffect } from "react";
import { setSearchTypeProfile } from "../../../TopBar/Search/searchSlice";
import { fetchPeopleLoading } from "./peopleSlice";

export const PeopleList = () => {
  const peopleState = useSelector(selectPeopleState);
  const peopleList = useSelector(selectPeople);
  const resultsPage = useSelector(selectResultsPage);
  const totalPages = useSelector(selectTotalPages);
  const totalResults = useSelector(selectTotalResults);
  const dispatch = useDispatch();
  const page = useGetQueryParameter("page");

  useEffect(() => {
    dispatch(setSearchTypeProfile());
  }, []);

  useEffect(() => {
    dispatch(fetchPeopleLoading(page));
  }, [page]);

  switch (peopleState) {
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
      return (
        <Container>
          <Section
            fullpage
            people
            title="Popular People"
            content={peopleList.map((people) => (
              <BasicTile
                key={people.id}
                poster={people.profile_path}
                name={people.name}
                id={people.id}
              />
            ))}
            foot={
              <Pagination
                currentPage={resultsPage}
                totalPages={totalPages > 500 ? "500" : totalPages}
              />
            }
          />
        </Container>
      );
  }
};
