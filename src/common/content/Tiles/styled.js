import styled, { css } from "styled-components";

export const StyledTiles = styled.ul`
  list-style: none;
  margin: 0 auto;
  padding: 0;
  display: grid;

  ${({ movies }) =>
    movies &&
    css`
      grid-template-columns: 1fr 1fr 1fr 1fr;

      @media (max-width: ${({ theme }) => theme.breakPoints.tabletMax}) {
        grid-template-columns: 1fr 1fr;
        justify-items: center;
      }
      @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
        grid-template-columns: 1fr;
      }
    `}
  ${({ people }) =>
    people &&
    css`
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

      @media (max-width: ${({ theme }) => theme.breakPoints.tabletMax}) {
        grid-template-columns: 1fr 1fr 1fr;
        justify-items: center;
      }
      @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
        grid-template-columns: 1fr 1fr;
      }
    `};
`;

// this li item is to be substituted with the tile component
export const StyledTile = styled.li`
  background-color: gray;

  ${({ movie }) =>
    movie &&
    css`
      height: 650px;
      width: 324px;
      margin: 12px;

      @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
        height: 201px;
        width: 288px;
        margin: 8px;
      }
    `}

  ${({ profile }) =>
    profile &&
    css`
      height: 339px;
      width: 208px;
      margin: 12px;

      @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
        height: 245px;
        width: 136px;
        margin: 8px;
      }
    `}
`;
