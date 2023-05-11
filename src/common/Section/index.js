import {
  StyledFoot,
  StyledHead,
  StyledHeading,
  StyledSection,
  StyledContent,
} from "./styled";

export const Section = ({ title, movies, people, content, foot }) => (
  <StyledSection fullpage>
    <StyledHead>
      <StyledHeading>{title}</StyledHeading>
    </StyledHead>
    <StyledContent movies={movies} people={people}>
      {content}
    </StyledContent>
    <StyledFoot>{foot}</StyledFoot>
  </StyledSection>
);