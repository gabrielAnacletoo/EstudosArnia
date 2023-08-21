import { useState } from "react";


const estiloPai = {
  display: "flex",
  justifyContent: "center",
}

const estiloFilhos = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid dimgray",
  borderRadius: "7px",
  margin: "20px 15px 0 20px",
  width: "150px",
}

const btnAdd= {
  border: "none",
  width: "120px",
  backgroundColor: "#00995D",
  color: "#FFF",
  borderRadius: "10px",
  marginBottom: "1em",
  cursor: "pointer"
}
const btnNoEstoque = {
    border: "none",
    width: "120px",
    backgroundColor: "#FF3333",
    color: "#FFF",
    borderRadius: "10px",
    marginBottom: "1em",
    cursor: "pointer"
}

const produtos = [
    { id: 1, name: "Detergente", stock: 200, price: 2.5 },
    { id: 2, name: "Desinfetante", stock: 120, price: 5.5 },
    { id: 3, name: "Lanterna", stock: 0, price: 22.3 },
    { id: 4, name: "Refrigerante", stock: 500, price: 9 }
  ]
  
const Ex2 = () => {
const [carrinho, setCarrinho] = useState([])

function AddCarrinho(index) {
    const novoCarrinho = [...carrinho, produtos[index]];
    setCarrinho(novoCarrinho)//setcarrinho altera a variavel carrinho
    console.log(carrinho)
  }
  function formatCurrency(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
  
  
  return (
    <> 

    <div style={estiloPai}>
      {produtos.map(({ name, price, stock }, index) => {
        return (
          <div key={index} style={estiloFilhos}>
            <p>Nome: {name}</p>
            <small>Em Estoque: {stock}</small>
            <p>Preço: {formatCurrency(price)}</p>
            <div>
              {stock > 0  ? <button style={btnAdd} onClick={ () => AddCarrinho(index)}> Adicionar ao carrinho + </button> : <button style={btnNoEstoque}>Produto sem estoque</button>}
            </div>
          </div>
        )
      })}
    </div>
    <div style={estiloPai}>
    <h1>Carrinho:</h1>
    <div>
    {carrinho.map((produto, index) => (
      <p key={index}>{produto.name}</p>
    ))}
    </div>
  </div>
    </>
  )
}

export default Ex2;
