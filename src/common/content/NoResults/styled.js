import styled from "styled-components";
import { ReactComponent as noResultsImage } from "../../../images/noResults.svg";

export const StyledNoResultsImage = styled(noResultsImage)`
  max-width: 668px;
  margin: 28px auto;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    max-width: 288px;
    max-height: 220px;
  }
`;
