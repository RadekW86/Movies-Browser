import {
  StyledFoot,
  StyledHead,
  StyledHeading,
  StyledSection,
  StyledContent,
  StyledTiles,
} from "./styled";

export const Section = ({ title, movies, people, content, foot }) => (
  <StyledSection fullpage>
    <StyledHead>
      <StyledHeading>{title}</StyledHeading>
    </StyledHead>
    {movies || people ? (
      <StyledTiles movies={movies} people={people}>
        {content}
      </StyledTiles>
    ) : (
      <StyledContent>{content}</StyledContent>
    )}
    <StyledFoot>{foot}</StyledFoot>
  </StyledSection>
);