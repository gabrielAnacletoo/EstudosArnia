import { Circle, Container, FilledCircle } from "./styles"

const Skill = ({ name, level }) => {
  return (
    <Container>
      <h5>{name}</h5>
      {Array(level)
        .fill(0)
        .map((value) => (
          <FilledCircle key={value} />
        ))}
      {5 - level > 0 &&
        Array(5 - level)
          .fill(0)
          .map((value) => <Circle key={value} />)}
    </Container>
  )
}

export default Skill