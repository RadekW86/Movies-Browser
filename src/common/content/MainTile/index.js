import {
  StyledMainTile,
  Poster,
  NoPoster,
  StyledVideoIcon,
  ContainerInf,
  DescriptionWrapper,
  NameTitle,
  ProductionYear,
  MovieGenresWrapper,
  MovieGenre,
  MovieRating,
  Rate,
  Votes,
  StyledStarIcon,
  StyledPersonIcon,
  Description,
  NameInformation,
  Information,
  InformationWrapper,
  Span,
  InformationFiled,
} from "./styled";

export const MainTile = ({
  poster,
  name,
  productionYear,
  description,
  firstInformation,
  secondInformation,
  genres,
  rate,
  votes,
  movie,
}) => (
  <StyledMainTile movie={movie}>
    {poster ? (
      <Poster alt="poster" src={poster} />
    ) : (
      <NoPoster alt="poster">
        {movie ? <StyledVideoIcon /> : <StyledPersonIcon />}
      </NoPoster>
    )}
    <ContainerInf>
      <DescriptionWrapper>
        <NameTitle>{name}</NameTitle>
        {movie ? (
          <ProductionYear>
            {new Date(productionYear).getFullYear()}
          </ProductionYear>
        ) : (
          ""
        )}
        <InformationWrapper>
          <InformationFiled>
            <NameInformation movie={movie}>
              {movie ? (
                "Production:"
              ) : (
                <>
                  <Span>Date of </Span>Birth
                </>
              )}
            </NameInformation>
            <Information>{firstInformation}</Information>
          </InformationFiled>
          <InformationFiled>
            <NameInformation movie={movie}>
              {movie ? "Release date:" : "Place of birth:"}
            </NameInformation>
            <Information>{secondInformation}</Information>
          </InformationFiled>
        </InformationWrapper>
        {movie ? (
          <MovieGenresWrapper>
            {genres.map((genre) => {
              return <MovieGenre>{genre.name}</MovieGenre>;
            })}
          </MovieGenresWrapper>
        ) : (
          ""
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
    <Description>{description}</Description>
  </StyledMainTile>
);
