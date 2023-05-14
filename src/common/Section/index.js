import {
  StyledContent,
  StyledFoot,
  StyledHead,
  StyledHeading,
  StyledSection,
} from "./styled";

export const Section = ({ title, content, foot }) => (
  <StyledSection fullpage>
    <StyledHead>
      <StyledHeading>{title}</StyledHeading>
    </StyledHead>
    <StyledContent>{content}</StyledContent>
    <StyledFoot>{foot}</StyledFoot>
  </StyledSection>
);
