import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  ${({ fullpage }) =>
    fullpage &&
    css`
      padding-top: 138px;
      padding-bottom: 75px;

      @media (max-width: ${({ theme }) => theme.breakPoints.tabletMax}px) {
        padding-top: 162px;
        padding-bottom: 7px;
      }
    `}
`;

export const StyledHead = styled.div`
  margin: 12px;

  @media (max-width: ${({ theme }) => theme.breakPoints.tabletMax}px) {
    margin: 4px 8px;
  }
`;

export const StyledHeading = styled.h1`
  font-size: 36px;
  margin: 0px;
  font-weight: 600;
`;

export const StyledFoot = styled.div`
  text-align: center;
`;
