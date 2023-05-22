import { Container } from "../../../common/Container/styled";
import { Section } from "../../../common/Section";
import { BasicTile } from "../../../common/content/BasicTile";
import { Pagination } from "../../../common/Pagination";
import { Loading } from "../../../common/content/Loading";
import { Error } from "../../../common/content/Error";
import { useSelector } from "react-redux";
import { selectPeople, selectPeopleState, selectPage } from "./peopleSlice";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchPeopleLoading } from "./peopleSlice";

export const PeopleList = () => {
  const peopleState = useSelector(selectPeopleState);
  const peopleList = useSelector(selectPeople);
  const page = useSelector(selectPage);
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const pageNumber = searchParams.get("page");

  useEffect(() => {
    dispatch(fetchPeopleLoading(pageNumber));
  }, [pageNumber]);

  switch (peopleState) {
    case "loading":
      return <Section fullpage content={<Loading />} />;
    case "error":
      return <Section fullpage content={<Error />} />;
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
            foot={<Pagination currentPage={page} totalPages="500" />}
          />
        </Container>
      );
  }
};
