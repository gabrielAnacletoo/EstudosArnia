import SectionTitle from "../SectionTitle"
import { Container } from "./styles"

const Section = ({ title, children }) => (
  <Container>
    <SectionTitle title={title} />
    {children}
  </Container>
)

export default Section