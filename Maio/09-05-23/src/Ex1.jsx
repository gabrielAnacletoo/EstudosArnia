import { useState } from "react";

const tarefas = [
  "Escovar os dentes",
  "Lavar o carro",
  "Fazer compras",
  "Fazer Exercicios das aulas",
  "Estudar no horario de almoço",
  "ler documentação",
  "Estudar o curso"
];

const estilo = {
  listStyleType: "none"
}

//tarefas concluidas é um array de booleanoss
const Ex1 = () => {
  const [tarefasConcluidas, setTarefasConcluidas] = useState([]);

  function concluidos(index) {
    const novasTarefasConcluidas = [...tarefasConcluidas];
    novasTarefasConcluidas[index] = !novasTarefasConcluidas[index]//altera o valor booleano do resultado
    setTarefasConcluidas(novasTarefasConcluidas);
  }

  return (
    <ul style={estilo}>
      {tarefas.map((tarefa, index) => (
        <li key={index}>
<input type="checkbox" name={`tarefa-${index}`} checked={tarefasConcluidas[index]} onChange={() => concluidos(index)}/>
<label htmlFor={`tarefa-${index}`}> {tarefasConcluidas[index] ? <s>{tarefa}</s> : tarefa} </label>
        </li>
      ))}
    </ul>
  )
}
//{tarefasConcluidas[index] ? <s>{tarefa}</s> : tarefa} se cair em true, adiciona <s> se nao remove
export default Ex1;
