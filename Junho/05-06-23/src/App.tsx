import React, { useState } from "react";
import Papel from "../img/papel.png";
import Tesoura from "../img/tesoura.png";
import Pedra from "../img/pedra.png";

const Parag: React.CSSProperties = {
  color: "#6950A1",
  fontWeight: "bold"
};

const globaldiv: React.CSSProperties = {
  alignItems: 'center',
  justifyContent: 'center',
  display: "flex",
  flexDirection: 'column',
  fontFamily: 'Roboto'
};

const divFil: React.CSSProperties = {
  display: "flex",
  justifyContent: 'space-between',
};

const imgs: React.CSSProperties = {
  width: "40px"
};

const opcoes = [
  { nome: "Pedra", imagem: Pedra },
  { nome: "Tesoura", imagem: Tesoura },
  { nome: "Papel", imagem: Papel }
];

const App: React.FC = () => {
  const [escolha, setEscolha] = useState<string | null>(null);

  const handleClick = (opcao: string) => {
    setEscolha(opcao);
  };

  console.log(escolha);

  return (
    <>
      <div style={globaldiv}>
        <p style={Parag}>Escolha uma opção</p>
        <div style={divFil}>
          {escolha === null && (
            opcoes.map((opcao) => (
              <div key={opcao.nome} onClick={() => handleClick(opcao.nome)}>
                <img src={opcao.imagem} style={imgs} alt={opcao.nome} />
              </div>
            ))
          )}
          {escolha !== null && (
            <div onClick={() => handleClick(escolha)}>
              <img src={opcoes.find((opcao) => opcao.nome === escolha)?.imagem} style={imgs} alt={escolha} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
