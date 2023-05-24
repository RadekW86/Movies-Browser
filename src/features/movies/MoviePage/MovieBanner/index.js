import { IMAGE_PATH } from "../../../../common/getAPI";
import {
  Backdrop,
  BackdropWrapper,
  MovieTitle,
  Rate,
  StyledMovieBanner,
  StyledStarIcon,
  Votes,
  Vineta,
  RateWrapper,
  MovieRating,
  MaxRate,
} from "./styled";

export const MovieBanner = ({ movieTitle, rate, votes, srcBackDrop }) =>
  srcBackDrop && (
    <StyledMovieBanner>
      <BackdropWrapper>
        <Vineta>
          <MovieTitle>{movieTitle}</MovieTitle>
          <MovieRating>
            <RateWrapper>
              <StyledStarIcon />
              <Rate>{rate.toFixed(2)}</Rate>
              <MaxRate> / 10</MaxRate>
            </RateWrapper>
            <Votes>{`${votes} votes`}</Votes>
          </MovieRating>
        </Vineta>
        <Backdrop src={`${IMAGE_PATH}${srcBackDrop}`} />
      </BackdropWrapper>
    </StyledMovieBanner>
  );
