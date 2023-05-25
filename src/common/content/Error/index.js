import { toMovies } from "../../../core/routes";
import {
  StyledDiv,
  StyledExclamationImage,
  StyledHeading,
  StyledParagraph,
  StyledLink,
  StyledReturnButton,
} from "./styled";

export const Error = () => {
  return (
    <StyledDiv>
      <StyledExclamationImage />
      <StyledHeading>Ooops! Something went wrong...</StyledHeading>
      <StyledParagraph>
        Please check your network connection and try again
      </StyledParagraph>
      <StyledLink to={toMovies}>
        <StyledReturnButton>Back to home page</StyledReturnButton>
      </StyledLink>
    </StyledDiv>
  );
};
