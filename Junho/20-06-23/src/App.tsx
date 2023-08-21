import { useState } from "react"
import { ShoppingCartContextType } from "./context/ShoppingCart"


const App = () => {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCart>({
    items: [],
    total: 0
  })

  return <ShoppingCartContextType.Provider value={[shoppingCart, setShoppingCart]}>
  <p></p>
  </ShoppingCartContextType.Provider>
}

export default App