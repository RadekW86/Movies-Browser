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
} from "./styled";

export const BasicTile = ({
  poster,
  name,
  productionInF,
  genres,
  rate,
  votes,
  movie,
}) => (
  <StyledBasicTile movie={movie}>
    {poster ? (
      <Poster alt="poster" src={`https://image.tmdb.org/t/p/w500/${poster}`} />
    ) : (
      <NoPoster alt="poster">
        {movie ? <StyledVideoIcon /> : <StyledPersonIcon />}
      </NoPoster>
    )}
    <ContainerInf>
      <DescriptionWrapper>
        <NameTitle movie={movie}>{name}</NameTitle>
        {movie ? (
          <>
            <ProductionInf movie={movie}>
              {new Date(productionInF).getFullYear()}
            </ProductionInf>
            <MovieGenresWrapper>
              {genres.map((genre) => {
                return <MovieGenre>{genre}</MovieGenre>;
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
