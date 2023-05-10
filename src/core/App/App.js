import { Container } from "../../common/Container/styled";
import { Section } from "../../common/Section";
import { NoResults } from "../../common/content/NoResults";
import { Tiles } from "../../common/content/Tiles";

export const App = () => (
  <Container>
    <Section
      title="Sorry, there are no results for “Muan”"
      content={<NoResults />}
      foot="EXAMPLE FOOT"
    />
  </Container>
);
