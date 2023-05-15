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

export const BasicTile = ({ poster, name, productionInF, genres, rate, votes, movie }) => (
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
                <NameTitle movie={movie}>
                    {name}
                </NameTitle>
                <ProductionInf movie={movie}>
                    {movie ? (
                        new Date(productionInF).getFullYear()
                    ) : (productionInF)}
                </ProductionInf>
                {movie ? (
                    <MovieGenresWrapper>
                        {genres.map((genre) => {
                            return <MovieGenre>{genre}</MovieGenre>
                        })}
                    </MovieGenresWrapper>
                ) : ("")
                }
            </DescriptionWrapper>
            {movie ? (
                <MovieRating>
                    <StyledStarIcon />
                    <Rate>{rate}</Rate>
                    <Votes>{`${votes} votes`}</Votes>
                </MovieRating>
            ) : ("")
            }
        </ContainerInf>
    </StyledBasicTile>
);
