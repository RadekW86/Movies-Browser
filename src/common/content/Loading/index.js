import loadingCircleImage from "../../../images/loadingCircle.svg";
import { StyledloadingCircleImage } from "./styled";

export const Loading = () => (
  <StyledloadingCircleImage 
    src={loadingCircleImage} 
    alt={"loading"}
  />
);
