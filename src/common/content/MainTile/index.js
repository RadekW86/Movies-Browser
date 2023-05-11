import {
    StyledMainTile,
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
    Description,
    NameInformation,
    Information,
    InformationWrapper
} from "./styled";

export const MainTile = ({
    poster,
    name,
    productionInf,
    description,
    firstInformation,
    secondInformation,
    genre,
    rate,
    votes,
    movie
}) => (
    <StyledMainTile movie={movie}>
        {poster ? (
            <Poster alt="poster" src={poster} />
        ) : (
            <NoPoster alt="poster">
                {movie
                    ? <StyledVideoIcon />
                    : <StyledPersonIcon />}
            </NoPoster>
        )}
        <ContainerInf>
            <DescriptionWrapper>
                <NameTitle>{name}</NameTitle>
                <ProductionInf>{productionInf}</ProductionInf>
                <InformationWrapper>
                    <NameInformation>
                        {movie
                            ? "Production"
                            : "Date of birth:"}
                    </NameInformation>
                    <Information>{firstInformation}</Information>
                    <NameInformation>
                        {movie
                            ? "Release date"
                            : "Place of birth:"}
                    </NameInformation>
                    <Information>{secondInformation}</Information>
                </InformationWrapper>
                {movie ? (
                    <MovieGenresWrapper>
                        <MovieGenre>{genre}</MovieGenre>
                    </MovieGenresWrapper>
                ) : (
                    ""
                )}
            </DescriptionWrapper>
            {movie ? (
                <MovieRating>
                    <StyledStarIcon />
                    <Rate>{rate}</Rate>
                    <Votes>{votes}</Votes>
                </MovieRating>
            ) : (
                ""
            )}
        </ContainerInf>
        <Description>
            {description}
        </Description>
    </StyledMainTile>
);
