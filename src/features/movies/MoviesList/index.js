import { Container } from "../../../common/Container/styled";
import { Section } from "../../../common/Section";
import { Loading } from "../../../common/content/Loading";
import { Error } from "../../../common/content/Error";
import { BasicTile } from "../../../common/content/BasicTile";
import { Pagination } from "../../../common/Pagination";
import { useSelector } from "react-redux";
import { selectMovies, selectMoviesState, selectPage } from "./moviesSlice";
import { useDispatch } from "react-redux";
import { useGetQueryParameter } from "../../../common/setQueryParameters";
import { useEffect } from "react";
import { fetchMoviesLoading } from "./moviesSlice";

export const MoviesList = () => {
  const moviesState = useSelector(selectMoviesState);
  const moviesList = useSelector(selectMovies);
  const page = useSelector(selectPage);
  const dispatch = useDispatch();
  const pageNumber = useGetQueryParameter("page");

  useEffect(() => {
    dispatch(fetchMoviesLoading(pageNumber));
  }, [pageNumber]);

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
            movies
            title="Popular Movies"
            content={moviesList.map((movie) => (
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
            foot={<Pagination currentPage={page} totalPages="500" />}
          />
        </Container>
      );
  }
};
