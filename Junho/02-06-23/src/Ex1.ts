// Exercício 1:  Considere a seguinte interface representando um usuário:

// Crie um novo tipo UserWithoutEmail utilizando Omit para remover a propriedade email da interface Use

interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

type UserWithoutEmail = Omit<User,"email">

