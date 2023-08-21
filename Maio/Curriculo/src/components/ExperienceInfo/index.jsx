import { Container, TitleContainer, PeriodText } from "./styles"

const ExperienceInfo = ({ experienceName, period, description }) => (
  <Container>
    <TitleContainer>
      <h4>{experienceName}</h4>
      <PeriodText>{period}</PeriodText>
    </TitleContainer>
    <p>{description}</p>
  </Container>
)

export default ExperienceInfo