
import Products from "../Products"
import { ImagesGames, Precos, Checkbox, Container, BtnLarge } from "../styles";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProductsContent = () => {


  const [carrinho, setCarrinho] = useState([]);

  const handleCheckboxChange = (produto, isChecked) => {
    const novoCarrinho = isChecked
      ? [...carrinho, produto]
      : carrinho.filter((item) => item.id !== produto.id);
    setCarrinho(novoCarrinho);
  }
//   console.log(carrinho)
  const FormatarPrice = (preco) => {
    const precoNumerico = parseFloat(preco);
    return precoNumerico.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
  }
console.log(carrinho)
  return (
    <> 
      <Container>
        <h1>Produtos</h1>
        <button className="Contador-carrinho">{carrinho.length}</button>
      </Container>
      <Container>
        {Products.map(({ id, price, nome, imgURL, quantidade }) => (
          <ImagesGames key={id}>
            <img src={imgURL} alt={nome} />
            <br />
            <Precos>
              <Checkbox
                type="checkbox"
                onChange={(e) =>
                  handleCheckboxChange(
                    { id, price, nome, imgURL, quantidade },
                    e.target.checked
                  )
                }
              />
              <p>
                <b>{FormatarPrice(price)}</b>
              </p>
            </Precos>
          </ImagesGames>
          
        ))}
      </Container>
        <Link to="/Carrinho" state={{ carrinho: carrinho}}><BtnLarge  >Ir para carrinho</BtnLarge></Link>
        </>
  )
}

export default ProductsContent;
