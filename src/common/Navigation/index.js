import { Search } from "./Search/styled";
import { Header, Item, Navigation, StyledList, StyledVideoImage, Title, TitleText } from "./styled"

export default () => {
    return (
        <Header>
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
            <Search
            type="text"
            placeholder="Search for movies..."
            />
        </Header>
    )
};