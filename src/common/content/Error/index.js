import exclamationImage from "../../../images/exclamation.svg";
import {
  StyledDiv,
  StyledExclamationImage,
  StyledHeading,
  StyledParagraph,
  StyledReturnButton,
} from "./styled";

export const Error = () => {
  return (
    <StyledDiv>
      <StyledExclamationImage 
        src={exclamationImage} 
        alt="exclamation" 
      />
      <StyledHeading>
        Ooops! Something went wrong... 
      </StyledHeading>
      <StyledParagraph>
        Please check your network connection and try again
      </StyledParagraph>
      <StyledReturnButton>
        Back to home page
        </StyledReturnButton>
    </StyledDiv>
  );
};
