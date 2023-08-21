import NavBarContent from "../components/NavBarContent";
import Footer from "../components/Footer";
import { ContainerCarrinho, ImagesCarrinhos, CarrinhoConteudo, BtnFinalizar } from "../styles";
import GlobalStyle from "../GlobalStyle";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Carrinho = () => {
  const [newcarrinho, setNewCarrinho] = useState([]);

  const location = useLocation();
  const carrinho = location.state && location.state.carrinho;

  const FormatarPrice = (preco) => {
    const precoNumerico = parseFloat(preco);
    return precoNumerico.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const Somatotal = newcarrinho.reduce((total, item) => {
    const somafinal = parseFloat(item.price);
    return total + somafinal
  }, 0);
  
  

  const handleIncreaseQuantity = (id) => {
    const updatedCarrinho = newcarrinho.map((item) => {
      if (item.id === id) {
        const newQuantidade = item.quantidade + 1;
        const newPrice = (parseFloat(item.price) + 10.00);
        return {
          ...item,
          quantidade: newQuantidade,
          price: newPrice,
        };
      }
      return item;
    });
    setNewCarrinho(updatedCarrinho);
  };
  
  

 const handleDecreaseQuantity = (id) => {
  const updatedCarrinho = newcarrinho.map((item) => {
    if (item.id === id && item.quantidade > 0) {
      const newQuantidade = item.quantidade - 1;
      const newPrice = parseFloat(item.price) - 10.00; // Valor negativo para diminuir
      return {
        ...item,
        quantidade: newQuantidade,
        price: newPrice,
      };
    }
    return item;
  });
  setNewCarrinho(updatedCarrinho);
};

  useEffect(() => {
    setNewCarrinho(carrinho);
  }, [carrinho]);

  console.log(newcarrinho);

  return (
    <>
      <GlobalStyle />
      <NavBarContent />
      <ContainerCarrinho>
        <h1>Carrinho</h1>
        <button className="Contador-newcarrinho">{newcarrinho.length}</button>
      </ContainerCarrinho>
      <CarrinhoConteudo>
        {newcarrinho.map(({ id, nome, price, imgURL, quantidade }) => (
          <ImagesCarrinhos key={id}>
            <img src={imgURL} alt={nome} />
            <ImagesCarrinhos>
              <p>{nome.toUpperCase()}</p>
              <p>Valor: {FormatarPrice(price)}</p>
              <p>Quantidade: {quantidade}</p>
              <button onClick={() => handleIncreaseQuantity(id)}>+</button>
              <button onClick={() => handleDecreaseQuantity(id)}>-</button>
            </ImagesCarrinhos>
          </ImagesCarrinhos>
        ))}
        <p className="total">Total: {FormatarPrice(Somatotal)}</p>
        <Link to="/Checkout" state={{newcarrinho: newcarrinho}}><BtnFinalizar>Finalizar compra</BtnFinalizar></Link>
      </CarrinhoConteudo>
      <Footer />
    </>
  );
};

export default Carrinho;
