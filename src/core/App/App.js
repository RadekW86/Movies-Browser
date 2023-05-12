import { Container } from "../../common/Container/styled";
import { Section } from "../../common/Section";
import { Tiles } from "../../common/content/Tiles";

export const App = () => (
  <Container>
    <Section
      title="Example Title"
      content={<Tiles />}
      foot="EXAMPLE FOOT"
    />
  </Container>
);
