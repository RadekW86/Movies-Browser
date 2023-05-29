import { MovieGenresWrapper, MovieGenre } from "./styled";

export const MovieGenres = ({ genres, movieGenresArray }) => {
  const movieGenres = movieGenresArray.filter((genre) =>
    genres.includes(genre.id)
  );

  return (
    <MovieGenresWrapper>
      {movieGenres.map((genre) => (
        <MovieGenre key={genre.id}>{genre.name}</MovieGenre>
      ))}
    </MovieGenresWrapper>
  );
};
