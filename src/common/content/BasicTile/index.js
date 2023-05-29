import { toMovie, toProfile } from "../../../core/routes";
import { IMAGE_PATH } from "../../getAPI";
import { MovieGenres } from "./MovieGenres";
import { selectMovieGenres } from "../../../features/movies/movieGenresSlice";
import {
  StyledBasicTile,
  Poster,
  NoPoster,
  StyledVideoIcon,
  ContainerInf,
  DescriptionWrapper,
  NameTitle,
  ProductionInf,
  MovieRating,
  Rate,
  Votes,
  StyledStarIcon,
  StyledPersonIcon,
  StyledLink,
} from "./styled";
import { useSelector } from "react-redux";

export const BasicTile = ({
  poster,
  name,
  productionInF,
  genres,
  rate,
  votes,
  movie,
  id,
}) => {
  const movieGenresArray = useSelector(selectMovieGenres);

  return (
    <StyledBasicTile movie={movie}>
      <StyledLink to={movie ? toMovie({ id: id }) : toProfile({ id: id })}>
        {poster ? (
          <Poster movie={movie} alt="poster" src={`${IMAGE_PATH}${poster}`} />
        ) : (
          <NoPoster movie={movie} alt="poster">
            {movie ? <StyledVideoIcon /> : <StyledPersonIcon />}
          </NoPoster>
        )}
      </StyledLink>
      <ContainerInf>
        <DescriptionWrapper>
          <StyledLink to={movie ? toMovie({ id: id }) : toProfile({ id: id })}>
            <NameTitle movie={movie}>{name}</NameTitle>
          </StyledLink>
          {movie ? (
            <>
              <ProductionInf movie={movie}>
                {productionInF ? new Date(productionInF).getFullYear() : ""}
              </ProductionInf>
              <MovieGenres
                genres={genres}
                movieGenresArray={movieGenresArray}
              />
            </>
          ) : (
            <ProductionInf>{productionInF}</ProductionInf>
          )}
        </DescriptionWrapper>
        {movie && (
          <MovieRating>
            <StyledStarIcon />
            <Rate>{rate.toFixed(1)}</Rate>
            <Votes>{`${votes} votes`}</Votes>
          </MovieRating>
        )}
      </ContainerInf>
    </StyledBasicTile>
  );
};
