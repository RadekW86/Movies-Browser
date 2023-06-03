import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  padding-top: 32px;
  padding-bottom: 32px;

  @media (max-width: ${({ theme }) => theme.breakPoints.tabletMax}) {
    margin: 0 26px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    padding-top: 24px;
    padding-bottom: 24px;
    margin: 0 16px;
  }

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
  display: grid;
  grid-template-columns: 1fr;
`;

export const StyledTiles = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0px;
  display: grid;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    padding: 0px;
  }

  ${({ movies }) =>
    movies &&
    css`
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 24px;

      @media (max-width: ${({ theme }) => theme.breakPoints.tabletMax}) {
        grid-template-columns: repeat(2, 1fr);
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
      grid-template-columns: repeat(5, 1fr);
      grid-gap: 24px;

      @media (max-width: ${({ theme }) => theme.breakPoints.tabletMax}) {
        grid-template-columns: repeat(4, minmax(145px, 1fr));
        justify-items: center; 
      }
      @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 16px;
      }
    `};
`;
