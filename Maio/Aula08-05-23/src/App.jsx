const tarefas = [
  "Escovar os dentes",
  "Ir ao banheiro",
  "Dar Banho no cachorro",
  "Lavar carro"
]
/*
.map(() => (codigo aqui))
*/
const estilo = {
  listStyleType: "none"
}
export default function Ex1 () {
  return (
    <ul className="minhas-tarefas" style={estilo}>
      {tarefas.map((tarefa,index) => (
        <li key={index}>
          <input type="checkbox" name={`tarefa-{index}`} id={`tarefa-{index}`} />
          <label htmlFor={`tarefa-{index}`}>{tarefa}</label>
        </li>
      ))}
    </ul>
  )
}
