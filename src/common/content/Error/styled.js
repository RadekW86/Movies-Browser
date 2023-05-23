import styled from "styled-components";
import {ReactComponent as exclamationImage}  from "../../../images/exclamation.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min.js";

export const StyledDiv = styled.div`
  margin: 151px 0px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    margin: 50px 0px;
  }
`;
export const StyledExclamationImage = styled(exclamationImage)`
  max-width: 120px;
  max-height: 120px;
`;

export const StyledHeading = styled.h2`
  margin: 0px auto;
  margin-top: 38.16px;
  max-width: 600px;
  font-size: 36px;
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 18px;
  }
`;

export const StyledParagraph = styled.p`
  margin: 24px auto;
  max-width: 427px;
  font-size: 22px;
  font-weight: 500;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 12px;
    max-width: 250px;
  }
`;

export const StyledReturnButton = styled.button`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-weight: 700;
  font-family: "Open Sans", sans-serif;
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 5px;
  border: none;
  width: 181px;
  height: 51px;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 10px;
    width: 130px;
    height: 37px;
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
