import styled, { css } from "styled-components";

export const StyledSection = styled.section`
margin: 0 auto;

@media (max-width: ${({ theme }) => theme.breakPoints.tabletMax}) {
  max-width: 672px;
      }
      @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
  max-width: 288px;
      }

  ${({ fullpage }) =>
    fullpage &&
    css`
      padding-top: 138px;
      padding-bottom: 75px;

      @media (max-width: ${({ theme }) => theme.breakPoints.tabletMax}) {
        padding-top: 162px;
        padding-bottom: 7px;
      }
    `}
`;

export const StyledHead = styled.div`
  margin: 12px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    margin: 4px 0px;
  }
`;

export const StyledHeading = styled.h1`
  font-size: 36px;
  margin: 0px;
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 18px;
  }
`;

export const StyledContent = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const StyledFoot = styled.div`
  text-align: center;
`;
