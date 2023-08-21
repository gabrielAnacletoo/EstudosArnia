import { useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';
import { Container } from '../styles/style'


const Toggle = () => {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
      throw new Error('ThemeProvider não encontrado.');
    }
  
    const { theme, alterarTema } = themeContext;

    return (
        <Container className={theme}>
           <p>Tema Atual:  {theme}</p>
            <button onClick={alterarTema}> Alterar Tema </button>
        </Container>
    )
}

export default Toggle