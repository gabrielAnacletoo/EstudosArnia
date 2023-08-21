/**
 Faça uma tela com dois botões e um valor numérico. Quando clicado no primeiro botão,
 o número deverá diminuir em 1 o valor,
 quando clicado no segundo botão, o número deverá aumentar em 1 o valor.
 */

import { useState } from "react"

const Ex1UseStates = () => {
  const [count, setCount] = useState(0)

  const subCount = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const addCount = () => {
    if (count < 10) {
      setCount(count + 1)
    }    
  }

  return (
    <div style={{ width: 200, margin: '0 auto'  }}>
      <p>{count}</p>
      <button onClick={subCount}>-</button>
      <button onClick={addCount}>+</button>
    </div>
  )
 }

 export default Ex1UseStates
