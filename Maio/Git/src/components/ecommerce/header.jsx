import styled from "styled-components"

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #6950A1;
  color: #fff;
  padding: 1rem;
  margin-bottom: 1rem;
`

const Logo = styled.div``

const Title = styled.div``

export default function Header () {
  return (
    <Container>
      <Logo>ARNIA</Logo>
      <Title>Loja Virtual</Title>
    </Container>
  )
}