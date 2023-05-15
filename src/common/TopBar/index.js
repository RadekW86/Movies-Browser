import { toMovies, toPeople, toExtras } from "../../core/routes";
import { Search } from "../Search/styled";
import {
  StyledTopBar,
  Item,
  Navigation,
  StyledList,
  StyledVideoImage,
  Title,
  TitleText,
  StyledTopContent,
  StyledTopSubContent,
  StyledNavLink,
} from "./styled";

export const TopBar = () => {
  return (
    <StyledTopBar>
      <StyledTopContent>
        <StyledTopSubContent>
          <Title>
            <StyledVideoImage></StyledVideoImage>
            <TitleText>Movies Browser</TitleText>
          </Title>
          <Navigation>
            <StyledList>
              <Item>
                <StyledNavLink to={toMovies}>MOVIES</StyledNavLink>
              </Item>
              <Item>
                <StyledNavLink to={toPeople}>PEOPLE</StyledNavLink>
              </Item>
              <Item>
                <StyledNavLink to={toExtras}>+++</StyledNavLink>
              </Item>
            </StyledList>
          </Navigation>
        </StyledTopSubContent>
        <Search type="text" placeholder="Search for movies..." />
      </StyledTopContent>
    </StyledTopBar>
  );
};
