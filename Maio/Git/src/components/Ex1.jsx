// Crie um programa React que renderiza na tela uma to-do list, utilizando o
// create-react-app. A lista de tarefas deverá ser fixa e representada por um array.

// const tarefas = [“Escovar os dentes”, “Ir ao trabalho”, …]
// Lembrem-se: Tente utilizar a função map do array.

// Ao lado de cada tarefa deverá ter uma checkbox para que o usuário
// marque quais tarefas já completou.

import Ex1Item from "./Ex1Item"

const tarefas = [
  "Escovar os dentes",
  "Ir ao trabalho",
  "Dá banho no cachorro",
  "Aprendendo ReactJS"
]

export default function Ex1 () {
  return (
    <ul className="minhas-tarefas">
      {tarefas.map((tarefa, index) => (
        <Ex1Item
          key={index}
          tarefa={tarefa}
          name={`tarefa-${index}`}
        />
      ))}
    </ul>
  )
}
