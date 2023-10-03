import { useState } from 'react'
import Header from './Components/Header/Header'
import * as S from './assets/Styles/Styled'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <S.ContainerApp>
      <Header/>
    </S.ContainerApp>
    </>
  )
}

export default App
