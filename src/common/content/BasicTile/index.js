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

export const BasicTile = ({ poster, name, productionInF, genre, rate, votes, movie }) => (
    <StyledBasicTile movie={movie}>
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
                <ProductionInf>{productionInF}</ProductionInf>
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
    </StyledBasicTile>
);
