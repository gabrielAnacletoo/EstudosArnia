// Crie um componente de avaliação de produtos
//  que permita ao usuário avaliar um produto em uma escala de 1 a 5
//   estrelas. O componente deve incluir um formulário com uma escolha 
//   de estrelas e um campo de texto para escrever uma revisão. 
// Quando o formulário for enviado, exiba a avaliação na tela.

import { useState } from "react";

const App = () => {
  const [avaliacao, setAvaliacao] = useState({
    estrelas: 0,
    comentario: ""
  });

  const Avaliar = (event) => {
    event.preventDefault(); // Evita que o formulário seja enviado

    const novaAvaliacao = {
      ...avaliacao,
      estrelas: parseInt(document.getElementById("avaliacao").value),
      comentario: document.getElementById("comentario").value
    };

    setAvaliacao(novaAvaliacao);
  };

  return (
    <div>
      <label htmlFor="avaliacao">Avaliação</label>
      <input
        type="number"
        min="1"
        max="5"
        name="avaliacao"
        id="avaliacao"
      />
      <br />

      <label htmlFor="comentario">Comentário:</label>
      <textarea
        name="comentario"
        id="comentario"
      />
      <br />

      <button type="submit" onClick={Avaliar}>Avaliar</button>
      <br /><br />
      <p>Estrelas: {avaliacao.estrelas}</p>
      <p>Comentário: {avaliacao.comentario}</p>
    </div>
  );
};

export default App;
