import styled, { css } from "styled-components";
import { ReactComponent as PersonIcon } from "../../../images/profile.svg";
import { ReactComponent as VideoIcon } from "../../../images/video.svg";
import { ReactComponent as StarIcon } from "../../../images/star.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min.js";

export const StyledBasicTile = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
  border-radius: 5px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow.basic};
  display: grid;
  grid-template-rows: auto 1fr;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    padding: 8px;
  }

  ${({ movie }) =>
    movie &&
    css`
      @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
        grid-template-columns: auto 1fr;
        gap: 0 16px;
      }
    `};
`;

export const Poster = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  aspect-ratio: 2 / 3;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    ${({ movie }) =>
      movie &&
      css`
        @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
          width: 114px;
          height: 169px;
        }
      `};
  }
`;

export const NoPoster = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  aspect-ratio: 2 / 3;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.silver};
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    ${({ movie }) =>
      movie &&
      css`
        @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
          width: 114px;
          height: 169px;
        }
      `};
  }
`;

export const StyledVideoIcon = styled(VideoIcon)`
  width: 94px;
  height: 96px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    height: 37px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.tabletMax}) {
    height: 37px;
  }
`;

export const StyledPersonIcon = styled(PersonIcon)`
  width: 94px;
  height: 96px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    height: 45px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.tabletMax}) {
    height: 45px;
  }
`;

export const ContainerInf = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
`;

export const DescriptionWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;
  margin-bottom: 16px;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakPoints.tabletMax}) {
    margin-bottom: 12px;
    grid-gap: 4px;
    margin: 0;
  }
`;

export const NameTitle = styled.h3`
  margin: 16px 0 0;
  font-weight: 500;
  font-size: 22px;
  line-height: ${({ theme }) => theme.lineHeight.s};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 16px;
    margin: 8px 0 0;
  }

  ${({ movie }) =>
    movie &&
    css`
      text-align: start;
      @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
        margin: 0;
      }
    `};
`;

export const ProductionInf = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: ${({ theme }) => theme.lineHeight.m};
  color: ${({ theme }) => theme.colors.darkerGrey};
  text-align: center;

  ${({ movie }) =>
    movie &&
    css`
      text-align: start;
    `};
`;

export const MovieRating = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    gap: 8px;
  }
`;

export const StyledStarIcon = styled(StarIcon)`
  width: 24px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    width: 16px;
  }
`;

export const Rate = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 16px;
  line-height: ${({ theme }) => theme.lineHeight.m};
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 13px;
  }
`;

export const Votes = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: ${({ theme }) => theme.lineHeight.m};
  color: ${({ theme }) => theme.colors.darkerGrey};

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 13px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:visited {
  }
  &:hover {
    filter: brightness(110%);
  }
  &:focus {
    filter: brightness(110%);
  }
`;
