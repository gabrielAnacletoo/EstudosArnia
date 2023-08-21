import { ChangeEvent, useState } from "react";
import { Formulario, Container } from "../assets/Styles";

type UserTypes = {
  nome: string;
  telefone: string;
  email: string;
  gender: string;
  senha: string;
}

const Form = () => {
  const [user, setUser] = useState<UserTypes>({
    nome: "",
    telefone: "",
    email: "",
    gender: "",
    senha: ""
  })

  //state para exibir os dados do user 
  const [mostrarDados, setMostrarDados] = useState(false)

  //ao acionar o event com a funççao ele dispara um evento e abaixo usamos destruct para pegar o nome e o value do evento
  const handleChange = (event: ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
    const { name, value } = event.target; //usamos destruct para pegar os names e os valores dos names
    setUser({
      ...user,
      [name]: value
    })
  }
//usamos ...user paramanter os valores anteriores sem serem substituidos
//criamos um state acima para mostrar dados que começa como false
//se for alterado para true quando passamos a função para o botao ele muda para true e exibe as propriedades
//user.nome user.telefone
  const handleClick = () => {
    setMostrarDados(true)
  }

  return (
    <Container>
      <Formulario>
        <h5>Formulário:</h5>
        <label htmlFor="nome">Nome:</label>
        <input type="text" name="nome" id="nome" placeholder="Seu nome" onChange={handleChange} />

        <label htmlFor="telefone">Telefone:</label>
        <input type="number" name="telefone" id="telefone" placeholder="(DDD)99999-9999" onChange={handleChange} />

        <label htmlFor="email">E-mail:</label>
        <input type="email" name="email" id="email" placeholder="email@example.com" onChange={handleChange} />


        <div className="form-group">
        <label htmlFor="password">Genero:</label>
        
        <select name="gender" id="gender" onChange={handleChange}>
          <option value="Default">Selecione o genêro</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Outros">Outros</option>
        </select>
      </div>


        <label htmlFor="senha">Password:</label>
        <input type="password" name="senha" id="senha" onChange={handleChange} />

        <br />
        <button onClick={handleClick}>Exibir Usuário</button>
      </Formulario>
      {mostrarDados && (
        <div>
          <p>Nome: {user.nome}</p>
          <p>Telefone: {user.telefone}</p>
          <p>Genero: {user.gender}</p>
        </div>
      )}

         {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
    </Container>
  )
}

export default Form;
