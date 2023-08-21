import styled from "styled-components"

const Container = styled.footer`
  border-top: 4px solid #6950A1;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1rem;

  > div {
    width: 120px;
    height: 60px;
    line-height: 60px;
    background-color: #6950A1;
    text-align: center;
    color: #fff;
  }
`

export default function Footer () {
  return (
    <Container>
      <div>Visa</div>
      <div>Master</div>
      <div>Boleto</div>
      <div>Hiper</div>
    </Container>
  )
}