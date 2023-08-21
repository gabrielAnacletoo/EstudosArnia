/* 
Modifique a tarefa anterior, porém agora você vai marcar quais tarefas
 estão completas e não estão completas a partir do array. Exemplo:

const tarefas = [
	{ description: “Escovar os dentes”, isDone: true },
  { description: “Assistir à aula”, isDone: false }
]

Para as tarefas completas, adicione condicionalmente a tag <s>, para que
a tarefa esteja riscada. As não completas deverão ser um <p> normal.
*/

const tarefas = [
	{
    description: "Escovar os dentes",
    isDone: true
  },
  {
    description: "Assistir à aula",
    isDone: false
  }
]

export default function Ex2 () {
  return (
    <ul className="minhas-tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={`tarefa-${index}`}>
          <input
            type="checkbox"
            name={`tarefa-${index}`}
            id={`tarefa-${index}`}
            defaultChecked={tarefa.isDone}
          />

          <label htmlFor={`tarefa-${index}`}>
            {tarefa.isDone === true
              ? <s>{tarefa.description}</s>
              : <span>{tarefa.description}</span>}
          </label>
        </li>
      ))}
    </ul>
  )
}
