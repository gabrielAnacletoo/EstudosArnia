const Button = styled.button`
  background-color: ${props => props.primary ? 'blue' : 'gray'};
  color: white;
  font-size: 16px;
  padding: 10px 20px;
`;

function Teste() {
  return (
    <div>
      <Button primary>Primary Button</Button>
      <Button>Secondary Button</Button>
    </div>
  );
}

export default Teste
