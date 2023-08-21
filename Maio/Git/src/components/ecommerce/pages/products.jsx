import { SCREENS } from "..";

export default function Products ({ changeScreen }) {
  return (
    <>
      <h1>PRODUTOS</h1>

      <button onClick={() => changeScreen(SCREENS.ECOMMERCE)}>Ir para carrinho</button>
    </>
  )
}
