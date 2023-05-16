import styled from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { ReactComponent as CameraImage } from "../images/video.svg";

export const StyledTopBar = styled.div`
  align-items: center;
  padding: 23px;
  background-color: ${({ theme }) => theme.colors.black};
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    padding: 32px 0 16px;
  }
`;

export const StyledTopContent = styled.div`
  max-width: 1330px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakPoints.tabletMax}) {
    justify-content: center;
    gap: 20px;
  }
`;

export const StyledTopSubContent = styled.div`
  display: flex;
  align-items: center;
  gap: 94px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    gap: 26px;
  }
`;

export const Title = styled.div`
  display: flex;
  gap: 16.5px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    gap: 10px;
  }
`;

export const TitleText = styled.h1`
  margin: 0;
  letter-spacing: -1.5px;
  font-weight: 500;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 13px;
    letter-spacing: -0.5px;
  }
`;

export const Navigation = styled.nav``;

export const StyledList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  gap: 44px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    gap: 26px;
  }
`;

export const Item = styled.li`
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 12px;
    height: 18px;
    padding: 0 5px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 21px;

  &.active {
    outline: 1px solid white;
    outline-offset: 8.5px;
    border-radius: 33px;
  }
`;

export const StyledVideoImage = styled(CameraImage)`
  width: 34px;
  height: 27px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    width: 15px;
    height: 12px;
  }
`;
