/*
Crie um componente que renderize uma lista de itens e permita
que o usuário adicione novos itens à lista clicando em um botão.
*/

import { useState } from "react"

export default function Ex2UseState () {
  const [texto, setTexto] = useState("")
  const [list, setLista] = useState([
    "Marcos",
    "João",
    "Maria"
  ])

  const addNewItem = () => {
    setLista([
      ...list,
      texto
    ])
    setTexto("")
  }

  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>
          {item}
        </li>
      ))}

      <br />
      <input
        type="text"
        placeholder="Adicione um texto"
        onChange={(event) => setTexto(event.target.value)}
        value={texto}
      />
      <button onClick={addNewItem}>Adicionar novo item</button>
    </ul>
  )
}