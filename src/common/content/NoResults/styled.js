import styled from "styled-components";
import { ReactComponent as noResultsImage } from "../../../images/noResults.svg";

export const StyledNoResultsImage = styled(noResultsImage)`
  max-width: 668px;
  margin: 28px 0px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    max-width: 288px;
  }
`;
