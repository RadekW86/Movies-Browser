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
  fetchPeopleLoading,
} from "./peopleSlice";
import { useDispatch } from "react-redux";
import { useGetQueryParameter } from "../../../common/setQueryParameters";
import { useEffect } from "react";
import {
  setSearchTypeProfile,
  selectEngaged,
  setPage,
  selectQuery,
} from "../../../TopBar/Search/searchSlice";
import { NoResults } from "../../../common/content/NoResults";

export const PeopleList = () => {
  const engaged = useSelector(selectEngaged);
  const peopleState = useSelector(selectPeopleState);
  const peopleList = useSelector(selectPeople);
  const resultsPage = useSelector(selectResultsPage);
  const totalPages = useSelector(selectTotalPages);
  const totalResults = useSelector(selectTotalResults);
  const dispatch = useDispatch();
  const page = useGetQueryParameter("page");
  const query = useSelector(selectQuery);

  useEffect(() => {
    dispatch(setSearchTypeProfile());
  }, []);

  useEffect(() => {
    if (!engaged) {
      dispatch(fetchPeopleLoading(page ? page : 1));
    } else {
      if (page !== "1") {
        dispatch(setPage(page ? page : 1));
      }
    }
  }, [page, engaged]);

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
            people={peopleList.length ? "people" : ""}
            title={
              !engaged
                ? "Popular People"
                : peopleList.length === 0
                ? `Sorry, there are no results for “${query}”`
                : `Search results for “${query}” ( ${
                    totalResults >= 10000 ? "10000 +" : totalResults
                  } )`
            }
            content={
              peopleList.length === 0 ? (
                <NoResults />
              ) : (
                <>
                  {peopleList.map((people) => (
                    <BasicTile
                      key={people.id}
                      poster={people.profile_path}
                      name={people.name}
                      id={people.id}
                    />
                  ))}
                </>
              )
            }
            foot={
              peopleList.length === 0 ? (
                ""
              ) : (
                <Pagination
                  currentPage={resultsPage}
                  totalPages={totalPages > 500 ? "500" : totalPages}
                />
              )
            }
          />
        </Container>
      );
  }
};
