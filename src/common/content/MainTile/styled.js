import styled, { css } from "styled-components";
import { ReactComponent as PersonIcon } from "../../images/profile.svg";
import { ReactComponent as VideoIcon } from "../../images/video.svg";
import { ReactComponent as StarIcon } from "../../images/star.svg";

export const StyledMainTile = styled.div`           
  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    padding: 16px;
    grid-gap: 16px;
    grid-template-columns: auto 1fr;
  };
  
  width: 100%;
  height: 100%;
  padding: 40px;
  display: grid;
  grid-template-columns: minmax(auto, 312px) 1fr;
  border-radius: 5px;
  margin: 0;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow.basic};

  ${({ movie }) => movie && css`
    @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    gap: 0 16px;
    padding: 16px;
    }`
  };
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
  };

  ${({ movie }) => movie && css`
  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    max-width: 114px;
    max-height: 169px;
  }`
  };
`;

export const NoPoster = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  grid-row: span 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.silver};

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    max-width: 114px;
    max-height: 169px;
  };
`;

export const StyledVideoIcon = styled(VideoIcon)`
  width: 94px;
  height: 96px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    height: 37px;
  };
  @media (max-width: ${({ theme }) => theme.breakPoints.tabletMax}) {
    height: 37px;
  };
`;

export const StyledPersonIcon = styled(PersonIcon)`
  width: 94px;
  height: 96px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    height: 45px;
  };
  @media (max-width: ${({ theme }) => theme.breakPoints.tabletMax}) {
    height: 45px;
  };
`;

export const ContainerInf = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px 0;

  @media (max-width: ${({ theme }) => theme.breakPoints.tabletMax}) {
    padding: 0;
  };
`;

export const DescriptionWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakPoints.tabletMax}) {
    margin-bottom: 12px;
    grid-gap: 4px;
    margin: 0;
  };
`;

export const NameTitle = styled.h3`
  margin: 16px 0 0;
  font-weight: 500;
  font-size: 36px;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 21px;
    margin: 0;
  };
`;

export const ProductionInf = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.darkerGrey};

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 13px;
    margin: 0;
  };
`;

export const MovieGenresWrapper = styled.div`
  margin: 0;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    flex-wrap: wrap;
    gap: 8px;
  };
`;

export const MovieGenre = styled.div`
  margin-bottom: 30px;
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
  };
`;

export const MovieRating = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    gap: 8px;
  };
`;

export const StyledStarIcon = styled(StarIcon)`
  width: 24px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    width: 16px;
  };
`;

export const Rate = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 22px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 13px;
  };
`;

export const Votes = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.darkerGrey};

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 13px;
  };
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 160%;
  padding: 0 40px 0;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 14px;
    grid-column: span 2;
    padding: 0;
  };
`;

export const InformationWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 14px;
    grid-template-columns: 1fr;
  };
`;

export const NameInformation = styled.div`
  font-size: 18px;
  line-height: 120%;
  margin: 0;
  color: ${({ theme }) => theme.colors.stormGrey};

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    display: none;
  };
`;

export const Information = styled.p`
  font-size: 18px;
  line-height: 120%;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 13px;
  };
`;