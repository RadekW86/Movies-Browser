import { IMAGE_PATH } from "../../getAPI";
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
  MaxRate,
  ProductionWrapper,
  ProductionItem,
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
      <Poster alt="poster" src={`${IMAGE_PATH}${poster}`} />
    ) : (
      <NoPoster alt="poster">
        {movie ? <StyledVideoIcon /> : <StyledPersonIcon />}
      </NoPoster>
    )}
    <ContainerInf>
      <DescriptionWrapper>
        <NameTitle movie={movie}>{name}</NameTitle>
        {movie && (
          <ProductionYear>
            {productionYear ? new Date(productionYear).getFullYear() : ""}
          </ProductionYear>
        )}
        <InformationWrapper movie={movie}>
          <InformationFiled>
            <NameInformation movie={movie}>
              {movie ? (
                "Production: "
              ) : (
                <>
                  <Span>Date of </Span>Birth
                </>
              )}
            </NameInformation>

            <>
              {movie ? (
                firstInformation.length === 0 ? (
                  "n/a"
                ) : (
                  <>
                    <ProductionWrapper>
                      {firstInformation.map((country) => (
                        <ProductionItem key={country.id}>
                          {country.name}
                        </ProductionItem>
                      ))}
                    </ProductionWrapper>
                  </>
                )
              ) : !firstInformation ? (
                "n/a"
              ) : (
                <>
                  <Information>
                    {new Date(firstInformation).toLocaleString("pl-PL", {
                      day: "numeric",
                      month: "numeric",
                      year: "numeric",
                    })}
                  </Information>
                </>
              )}
            </>
          </InformationFiled>
          <InformationFiled>
            <NameInformation movie={movie}>
              {movie ? "Release date:" : "Place of birth:"}
            </NameInformation>
            {!secondInformation ? (
              "n/a"
            ) : (
              <>
                {movie ? (
                  <Information>
                    {new Date(secondInformation).toLocaleString("pl-PL", {
                      day: "numeric",
                      month: "numeric",
                      year: "numeric",
                    })}
                  </Information>
                ) : (
                  secondInformation
                )}
              </>
            )}
          </InformationFiled>
        </InformationWrapper>
        {movie ? (
          <MovieGenresWrapper>
            {genres.map((genre) => (
              <MovieGenre key={genre.id}>{genre.name}</MovieGenre>
            ))}
          </MovieGenresWrapper>
        ) : (
          ""
        )}
      </DescriptionWrapper>
      {movie && (
        <MovieRating>
          <StyledStarIcon />
          <Rate>
            {`${rate.toFixed(1)} `}
            <MaxRate> / 10</MaxRate>
          </Rate>
          <Votes>{`${votes} votes`}</Votes>
        </MovieRating>
      )}
    </ContainerInf>
    <Description>{description}</Description>
  </StyledMainTile>
);
