import { Section } from "../../../common/Section";
import { BasicTile } from "../../../common/content/BasicTile";
import { Loading } from "../../../common/content/Loading";
import { useSelector } from "react-redux";
import { selectMovies, selectMoviesState, selectPage } from "../moviesSlice";
import { Error } from "../../../common/content/Error";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchMoviesLoading } from "../moviesSlice"
import { Pagination } from "../../../common/Pagination";
import { Container } from "../../../common/Container/styled";

export const MoviesList = () => {
  const moviesState = useSelector(selectMoviesState);
  const moviesList = useSelector(selectMovies);
  const page = useSelector(selectPage);
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const pageOne = searchParams.get("page");

  useEffect(() => {
    dispatch(fetchMoviesLoading(pageOne))
  }, [dispatch, pageOne]);

  switch (moviesState) {
    case "loading":
      return (
        <Section
          fullpage
          content={<Loading />}
        />
      )
    case "error":
      return (
        <Section
          fullpage
          content={<Error />}
        />
      )
    case "success":
      return (
        <Container>
          <Section
            fullpage
            movies
            title="Popular Movies"
            foot={
              <Pagination
                currentPage={page}
                totalPages="500"
              />
            }
            content={moviesList.map((movie) => (
              <BasicTile
                movie
                key={movie.id}
                poster={movie.poster_path}
                name={movie.title}
                productionInF={movie.release_date}
                genres={movie.genre_ids}
                rate={movie.vote_average}
                votes={movie.vote_count}
              />
            ))}
          />
        </Container>
      )
  }
};



