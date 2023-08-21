import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MeuComponente = () => {
  const [imagemDia, setImagemDia] = useState('');
  const [dataAtual, setDataAtual] = useState('2023-05-10');

  useEffect(() => {
    const buscarImagemDia = async () => {
      try {
        const response = await axios.get(
          `https://api.nasa.gov/planetary/apod?api_key=4BwuPf2as4vxcsDnUbG70aK0yoqY7CqtTaKgBpgJ&date=${dataAtual}`
        );
        setImagemDia(response.data.url);
      } catch (error) {
        console.error(error);
      }
    };

    buscarImagemDia();
  }, [dataAtual]);

  const divPai = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  };

  const imgStyle = {
    margin: "0.5em 0 0 0",
    width: "45em",
    height: "38em",
    border: "1px solid gray",
    borderRadius: "0.5em",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)"
  };

  const btns = {
    margin: "2em 21em 0 21em",
    borderRadius: "0.3em",
    border: "none",
    backgroundColor: "#B0E0E6",
    cursor: "pointer"
  };

  const handleDiaAnterior = () => {
    const dataAnterior = new Date(dataAtual);
    dataAnterior.setDate(dataAnterior.getDate() - 1);
    const novaData = dataAnterior.toISOString().split('T')[0];
    setDataAtual(novaData);
  };

  const handleProximoDia = () => {
    const dataProximo = new Date(dataAtual);
    dataProximo.setDate(dataProximo.getDate() + 1);
    const novaData = dataProximo.toISOString().split('T')[0];
    setDataAtual(novaData);
  };

  return (
    <div style={divPai}>
<nav style={{ boxShadow: "0px 2px 4px rgba(255, 255, 255, 0.2)", width: "100%", textAlign: "center", height: "3em" }}>
  <ul style={{ listStyle: "none", height: "100%", marginTop: "0" }}>
    <li style={{ color: "#FFF", fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
      <img src='https://www.nasa.gov/sites/default/files/styles/side_image/public/thumbnails/image/nasa-logo-web-rgb.png?itok=uDhKSTb1' style={{ height: "100%", width: "auto", objectFit: "contain" }} alt="Logo da NASA" />
      API NASA (APOD)
    </li>
  </ul>
</nav>


      {imagemDia && <img src={imagemDia} style={imgStyle} alt="Imagem do dia" />}
      <div>
        <button style={btns} onClick={handleDiaAnterior}>Dia anterior</button>
        <button style={btns} onClick={handleProximoDia}>Próximo dia</button>
      </div>
    </div>
  );
};

export default MeuComponente;
