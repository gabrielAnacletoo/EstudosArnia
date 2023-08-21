/*
Crie um contexto chamado ThemeContext que permite compartilhar um tema global entre vários componentes. O tema deve ser uma string que pode ser "claro" ou "escuro".

Crie dois componentes: ThemeProvider e ThemeToggle.

ThemeProvider deve ser responsável por manter o estado do tema e fornecer o valor do tema para seus componentes filhos.
ThemeToggle deve consumir o contexto ThemeContext e exibir um botão que alterna entre os temas "claro" e "escuro" ao ser clicado.

*/

import ThemeProvider from "./Components/ThemeProvider"
import Toggle from "./Components/ThemeToggle"

function App() {

  return (
    <>
    <ThemeProvider>
      <Toggle/>
    </ThemeProvider>
    </>
  )
}

export default App
