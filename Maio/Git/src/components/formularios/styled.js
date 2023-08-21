import styled from "styled-components"

export const Container = styled.div`
  width: 400px;
  margin: auto;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .50);
  background-color: #fff;
`

export const Label = styled.label`
  display: block;
  font-size: 1rem;
  color: #313131;
`

export const Input = styled.input`
  width: 100%;
  height: 40px;
  font-size: 1rem;
  color: #313131;
  border: 1px solid #006699;
  background: #f2f2f2;
  padding: 0 10px;
`

export const InputGroup = styled.div`
  margin-bottom: 15px;
`

export const Button = styled.button`
  background: ${(props) => props.color || 'blue' };
  color: #fff;
  border: 0;
  width: 100%;
  border-radius: 4px;
  height: 40px;
  font-size: 1rem; // 16px
  margin-top: 15px;
`
