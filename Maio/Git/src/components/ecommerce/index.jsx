import Layout from "./layout";

// import Products from "./pages/products";
// import EcommercePage from "./pages/ecommerce";
// import FinalizarCarrinho from "./pages/checkout";

import { Products, Checkout, Ecommerce as EcommercePage  } from './pages'
import { products as p } from "./utils/products";
import { useState } from "react";

export const SCREENS = {
  PRODUCTS: 0,
  ECOMMERCE: 1,
  CHECKOUT: 2
}


export default function Ecommerce () {
  const [screen, setScreen] = useState(SCREENS.PRODUCTS)
  const [products] = useState(p)

  return (
    <Layout>
      {screen === SCREENS.PRODUCTS && <Products changeScreen={setScreen} />}
      {screen === SCREENS.ECOMMERCE && <EcommercePage changeScreen={setScreen} />}
      {screen === SCREENS.CHECKOUT && <Checkout changeScreen={setScreen} />}
    </Layout>
  )
}
