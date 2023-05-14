
import { Container } from "../../common/Container/styled";
import { Section } from "../../common/Section";
import { Error } from "../../common/content/Error";
import { Loading } from "../../common/content/Loading";
import { NoResults } from "../../common/content/NoResults";
import { Tiles } from "../../common/content/Tiles";

export const App = () => (
  <Container>
    <Section 
    title={"Search results for “Mulan”"}
    content={<Loading />} 
    />
  </Container>
);
