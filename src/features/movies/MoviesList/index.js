import { Container } from "../../../common/Container/styled";
import { Section } from "../../../common/Section";
import { Loading } from "../../../common/content/Loading";
import { Error } from "../../../common/content/Error";
import { BasicTile } from "../../../common/content/BasicTile";
import { Pagination } from "../../../common/Pagination";
import { useSelector } from "react-redux";
import {
  selectMovies,
  selectMoviesState,
  selectResultsPage,
  selectTotalPages,
  selectTotalResults,
  fetchMoviesLoading,
} from "./moviesSlice";
import { useDispatch } from "react-redux";
import { useGetQueryParameter } from "../../../common/setQueryParameters";
import { useEffect } from "react";
import {
  setSearchTypeMovie,
  selectEngaged,
  setPage,
  selectQuery,
} from "../../../TopBar/Search/searchSlice";
import { NoResults } from "../../../common/content/NoResults";

export const MoviesList = () => {
  const engaged = useSelector(selectEngaged);
  const moviesState = useSelector(selectMoviesState);
  const moviesList = useSelector(selectMovies);
  const resultsPage = useSelector(selectResultsPage);
  const totalPages = useSelector(selectTotalPages);
  const totalResults = useSelector(selectTotalResults);
  const dispatch = useDispatch();
  const page = useGetQueryParameter("page");
  const query = useSelector(selectQuery);

  useEffect(() => {
    dispatch(setSearchTypeMovie());
  }, []);

  useEffect(() => {
    if (!engaged) {
      dispatch(fetchMoviesLoading(page));
    } else {
      if (page !== "1") {
        dispatch(setPage(page ? page : 1));
      }
    }
  }, [page, engaged]);

  switch (moviesState) {
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
            movies={moviesList.length ? "movies" : ""}
            title={
              !engaged
                ? "Popular Movies"
                : moviesList.length === 0
                ? `Sorry, there are no results for “${query}”`
                : `Search results for “${query}” ( ${
                    totalResults >= 10000 ? "10000 +" : totalResults
                  } )`
            }
            content={
              moviesList.length === 0 ? (
                <NoResults />
              ) : (
                <>
                  {moviesList.map((movie) => (
                    <BasicTile
                      movie
                      key={movie.id}
                      poster={movie.poster_path}
                      name={movie.title || movie.original_name}
                      productionInF={movie.release_date}
                      genres={movie.genre_ids}
                      rate={movie.vote_average}
                      votes={movie.vote_count}
                      id={movie.id}
                    />
                  ))}
                </>
              )
            }
            foot={
              moviesList.length === 0 ? (
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
