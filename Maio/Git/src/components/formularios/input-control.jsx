import { Input, Label, InputGroup } from "./styled";

export default function InputControl ({ label, id, children, ...resto }) {
  return (
    <InputGroup>
      <Label htmlFor={id}>{label}:</Label>
      <Input id={id} {...resto} />
      {children}
    </InputGroup>
  )
}

