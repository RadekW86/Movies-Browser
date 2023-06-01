import { useDispatch } from "react-redux";
import { toMovies, toPeople } from "../core/routes";
import { Search } from "./Search/index";
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
import { resetQuery } from "./Search/searchSlice";

export const TopBar = () => {
  const dispatch = useDispatch();

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
                <StyledNavLink
                  to={toMovies}
                  onClick={() => {
                    dispatch(resetQuery(""));
                  }}
                >
                  MOVIES
                </StyledNavLink>
              </Item>
              <Item>
                <StyledNavLink
                  to={toPeople}
                  onClick={() => {
                    dispatch(resetQuery(""));
                  }}
                >
                  PEOPLE
                </StyledNavLink>
              </Item>
            </StyledList>
          </Navigation>
        </StyledTopSubContent>
        <Search />
      </StyledTopContent>
    </StyledTopBar>
  );
};
