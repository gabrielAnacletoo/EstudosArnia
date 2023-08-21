import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Register from './components/Register.tsx'
import Columns from './components/Columns.tsx'
import Form from "./components/Form.tsx"
import GlobalStyles from './style/globalStyles.ts'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
  path: "/Register",
  element: <Register/>
  },
  {
  path: "/Columns",
  element: <Columns/>
  },
  {
  path: "/Form",
  element: <Form/>
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
