
import styled from 'styled-components';

// const Button = styled.button`
//   background-color: ${props => props.primary ? 'blue' : 'gray'};
//   color: white;
//   font-size: 16px;
//   padding: 10px 20px;
// `;



const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: darkblue;
  }
`;


function App() {
  return (
    <div>
      <Button primary>Primary Button</Button>
      <Button>Secondary Button</Button>

      <div>
      <Button>Hover me</Button>
    </div>
    </div>
  );
}
export default App