import { Container, IconWrapper } from "./styles"

const ContactInfo = ({ icon, information }) => (
  <Container>
    <IconWrapper>{icon}</IconWrapper>
    <small>{information}</small>
  </Container>
)

export default ContactInfo