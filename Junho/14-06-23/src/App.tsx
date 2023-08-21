import { CardBlue, Container } from "./style/style";
import Form from "./components/Form";
import { useState, useEffect, createContext } from "react";

const TokenContext = createContext<string | null>(null);

const App = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storage = localStorage.getItem('AUTH_TOKEN');
    setToken(storage);
  }, [])

  return (
    <Container>
    <CardBlue>
      <TokenContext.Provider value={token}>
        <Form />
      </TokenContext.Provider>
    </CardBlue>
    </Container>
  )
}

export default App;
