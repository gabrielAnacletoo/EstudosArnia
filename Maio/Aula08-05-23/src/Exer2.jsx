import { useState } from "react";

const tarefas = [
  "Escovar os dentes",
  "Ir ao banheiro",
  "Dar Banho no cachorro",
  "Lavar carro"
];

const estilo = {
  listStyleType: "none"
};

export default function () {
  const [tarefasConcluidas, setTarefasConcluidas] = useState([]);

  function handleCheckboxChange(index) {
    const novasTarefasConcluidas = [...tarefasConcluidas];
    novasTarefasConcluidas[index] = !novasTarefasConcluidas[index];
    setTarefasConcluidas(novasTarefasConcluidas);
  }

  return (
    <ul style={estilo}>
      {tarefas.map((tarefa, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={tarefasConcluidas[index]}
            onChange={() => handleCheckboxChange(index)}
          />
          {tarefa}
        </li>
      ))}
    </ul>
  );
}
