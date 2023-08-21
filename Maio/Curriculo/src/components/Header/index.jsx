import { Container, NameContainer, TextAndImageDivider, Image } from "./styles"

const Header = ({ name, profession, image }) => (
  <Container>
    <TextAndImageDivider>
      <Image src={image} />
      <NameContainer>
        <h1>{name}</h1>
        <h2>{profession}</h2>
      </NameContainer>
    </TextAndImageDivider>
  </Container>
)

export default Header