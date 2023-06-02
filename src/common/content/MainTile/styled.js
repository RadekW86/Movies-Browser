import styled, { css } from "styled-components";
import { ReactComponent as PersonIcon } from "../../../images/profile.svg";
import { ReactComponent as VideoIcon } from "../../../images/video.svg";
import { ReactComponent as StarIcon } from "../../../images/star.svg";

export const StyledMainTile = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px;
  display: grid;
  grid-template-columns: minmax(auto, 312px) 1fr;
  grid-template-rows: auto 1fr;
  margin: 0 auto;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow.basic};
  transition: 0.1s;

  @media (max-width: ${({ theme }) => theme.breakPoints.tabletMax}) {
    grid-template-columns: auto 1fr;
    grid-gap: 25px;
    padding: 25px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    grid-template-columns: auto 1fr;
    grid-gap: 16px;
    padding: 16px;
  }
`;

export const Poster = styled.img`
  height: 100%;
  max-height: 464px;
  width: 100%;
  border-radius: 5px;
  grid-row: span 2;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    width: 114px;
    height: 169px;
  }
`;

export const NoPoster = styled.div`
  width: 100%;
  border-radius: 5px;
  grid-row: span 2;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 2/3;
  background-color: ${({ theme }) => theme.colors.silver};

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    width: 114px;
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

  @media (max-width: ${({ theme }) => theme.breakPoints.tabletMax}) {
    height: 45px;
  }
`;

export const ContainerInf = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px 0;
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakPoints.tabletMax}) {
    padding: 0;
    gap: 16px;
  }
`;

export const DescriptionWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakPoints.tabletMax}) {
    margin-bottom: 12px;
    grid-gap: 8px;
    margin: 0;
  }
`;

export const NameTitle = styled.h3`
  margin: 0;
  font-weight: 500;
  font-size: 36px;
  line-height: ${({ theme }) => theme.lineHeight.s};
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 21px;
    margin: 0;
  }
`;

export const ProductionYear = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 22px;
  line-height: ${({ theme }) => theme.lineHeight.m};
  color: ${({ theme }) => theme.colors.solidBlack};

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 13px;
    margin: 0;
    color: ${({ theme }) => theme.colors.darkerGrey};
  }
`;

export const MovieGenresWrapper = styled.ul`
  list-style: none;
  margin: 0;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    gap: 8px;
  }
`;

export const MovieGenre = styled.li`
  padding: 8px 16px;
  border-radius: 5px;
  align-items: center;
  font-size: 14px;
  display: flex;
  gap: 8px;
  height: 36px;
  border: none;
  background: ${({ theme }) => theme.colors.grey};

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    margin-bottom: 10px;
    padding: 4px 8px;
    height: 24px;
    font-size: 10px;
  }
`;

export const MovieRating = styled.div`
  display: flex;
  align-items: start;
  gap: 8px;
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
  font-size: 22px;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 13px;
   align-self: center;
  }
`;

export const MaxRate = styled.span`
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: ${({ theme }) => theme.lineHeight.m};
  color: ${({ theme }) => theme.colors.darkerGrey};

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    display: none; 
  }
`;

export const Votes = styled.span`
  margin: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: ${({ theme }) => theme.lineHeight.m};
  color: ${({ theme }) => theme.colors.darkerGrey};
  align-self: flex-end;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 13px;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 20px;
  padding: 0 40px 0;
  text-align: justify;
  line-height: ${({ theme }) => theme.lineHeight.l};

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    margin: 0;
    font-size: 14px;
    grid-column: span 2;
    padding: 0;
    text-align: justify;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.tabletMax}) {
    grid-column: span 2;
    padding: 0;
    text-align: justify;
  }
`;

export const ProductionWrapper = styled.div`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const ProductionItem = styled.li`
  line-height: ${({ theme }) => theme.lineHeight.xs};
  white-space: break-spaces;
  font-size: 18px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 13px;
  }

  &:not(:last-child)::after {
    content: ", ";
  }
`;

export const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    margin: 0;
  }
`;

export const InformationFiled = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 14px;
    grid-gap: 4px;
  }
`;

export const NameInformation = styled.div`
  margin: 0;
  font-size: 18px;
  line-height: ${({ theme }) => theme.lineHeight.xs};
  color: ${({ theme }) => theme.colors.stormGrey};

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 12px;
  }

  ${({ movie }) =>
    movie &&
    css`
      @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
        display: none;
      }
    `}
`;

export const Information = styled.p`
  font-size: 18px;
  line-height: ${({ theme }) => theme.lineHeight.xs};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 13px;
  }
`;

export const Span = styled.span`
  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    display: none;
  }
`;
