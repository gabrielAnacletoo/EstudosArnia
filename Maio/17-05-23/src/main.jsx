import React from 'react'
import ReactDOM from 'react-dom/client'
import ProductList  from './components/ProductList.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductList/>,
  },
  {
    path: "Carrinho",
    element: <Carrinho/>
  },
  {
    path: "Checkout",
    element: <Checkout/>
  }
])
import Carrinho from './pages/Carrinho.jsx'
import Checkout from './pages/Checkout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
