import styled from "styled-components";
import { ReactComponent as loadingCircleImage } from "../../../images/loadingCircle.svg";

export const StyledloadingCircleImage = styled(loadingCircleImage)`
  max-width: 91px;
  max-height: 91px;
  margin: 108px 0px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    max-width: 35px;
    max-height: 35px;
    margin: 20px 0px;
  }

  animation-name: rotatingCircle;
  animation-iteration-count: infinite;
  animation-duration: 0.8s;
  @keyframes rotatingCircle {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
