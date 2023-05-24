import {
  StyledBasicTile,
  Poster,
  NoPoster,
  StyledVideoIcon,
  ContainerInf,
  DescriptionWrapper,
  NameTitle,
  ProductionInf,
  MovieGenresWrapper,
  MovieGenre,
  MovieRating,
  Rate,
  Votes,
  StyledStarIcon,
  StyledPersonIcon,
  StyledLink,
} from "./styled";
import { toMovie, toProfile } from "../../../core/routes";
import { nanoid } from "@reduxjs/toolkit";

export const BasicTile = ({
  poster,
  name,
  productionInF,
  genres,
  rate,
  votes,
  movie,
  id,
}) => (
  <StyledBasicTile movie={movie}>
    <StyledLink to={movie ? toMovie({ id: id }) : toProfile({ id: id })}>
      {poster ? (
        <Poster
          movie={movie}
          alt="poster"
          src={`https://image.tmdb.org/t/p/w500/${poster}`}
        />
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
              {new Date(productionInF).getFullYear()}
            </ProductionInf>
            <MovieGenresWrapper>
              {genres.map((genre) => {
                <MovieGenre key={nanoid()}>{genre}</MovieGenre>;
              })}
            </MovieGenresWrapper>
          </>
        ) : (
          <ProductionInf>{productionInF}</ProductionInf>
        )}
      </DescriptionWrapper>
      {movie ? (
        <MovieRating>
          <StyledStarIcon />
          <Rate>{rate}</Rate>
          <Votes>{`${votes} votes`}</Votes>
        </MovieRating>
      ) : (
        ""
      )}
    </ContainerInf>
  </StyledBasicTile>
);
