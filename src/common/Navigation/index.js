import { Search } from "./Search/styled";
import { StyledTopBar, Item, Navigation, StyledList, StyledVideoImage, Title, TitleText, StyledTopContent, StyledTopSubContent } from "./styled"

export default () => {
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
                            <Item>MOVIES</Item>
                            <Item>PEOPLE</Item>
                        </StyledList>
                    </Navigation>
                </StyledTopSubContent>
                <Search
                    type="text"
                    placeholder="Search for movies..."
                />
            </StyledTopContent>
        </StyledTopBar>
    )
};