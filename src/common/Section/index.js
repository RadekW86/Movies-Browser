import { StyledFoot, StyledHead, StyledHeading, StyledSection } from "./styled";

export const Section = ({ title, body, foot }) => (
  <StyledSection fullpage>
    <StyledHead>
      <StyledHeading>{title}</StyledHeading>
    </StyledHead>
    <div>{body}</div>
    <StyledFoot>{foot}</StyledFoot>
  </StyledSection>
);
