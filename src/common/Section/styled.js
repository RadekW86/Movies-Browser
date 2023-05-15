import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  margin: 0 auto;
  padding: 0;

  ${({ fullpage }) =>
    fullpage &&
    css`
      padding-top: 44px;
      padding-bottom: 75px;

      @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
        padding-top: 22px;
        padding-bottom: 8px;
      }
    `}
`;

export const StyledHead = styled.div`
  margin: 12px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    margin: 4px 16px;
  }
`;

export const StyledHeading = styled.h2`
  font-size: 36px;
  margin: 0px;
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 18px;
  }
`;

export const StyledFoot = styled.div`
  text-align: center;
`;

export const StyledContent = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledTiles = styled.ul`
  list-style: none;
  margin: 0 auto;
  padding: 12px;
  display: grid;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    padding: 8px;
  }

  ${({ movies }) =>
    movies &&
    css`
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 24px;

      @media (max-width: ${({ theme }) => theme.breakPoints.tabletMax}) {
        grid-template-columns: 1fr 1fr;
        justify-items: center;
      }
      @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
        grid-template-columns: 1fr;
        grid-gap: 16px;
      }
    `}
  ${({ people }) =>
    people &&
    css`
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
      grid-gap: 24px;

      @media (max-width: ${({ theme }) => theme.breakPoints.tabletMax}) {
        grid-template-columns: 1fr 1fr 1fr;
        justify-items: center;
      }
      @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 16px;
      }
    `};
`;
