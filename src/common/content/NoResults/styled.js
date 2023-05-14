import styled from "styled-components";

export const StyledNoResultsImage = styled.img`
  max-width: 668px;
  margin: 28px 0px;

  @media (max-width: ${({theme}) => theme.breakPoints.phoneMax}) {
    max-width: 288px;
  }
`;
