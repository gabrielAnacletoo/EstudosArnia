import NavBarContent from "../components/NavBarContent";
import Footer from "../components/Footer";
import { ContainerCarrinho, CheckoutDiv, ImagesCheckout, BtnLarge } from "../styles";
import GlobalStyle from "../GlobalStyle";
import { useLocation } from "react-router-dom";



const Checkout = () => {
    const location = useLocation();
    const Newcarrinho = location.state && location.state.newcarrinho;
    
    const totalQtd = Newcarrinho.reduce((total, item) => total + item.quantidade,0)
    
    const precoTotal = Newcarrinho.reduce((totalpreco, item) => {
        const precoSoma = parseFloat(item.price)
        return totalpreco + precoSoma;
    }, 0)
   
    console.log(Newcarrinho)
    return (
        <>  
        <GlobalStyle />
      <NavBarContent />
      <ContainerCarrinho>
        <h1>Checkout</h1>
        <button className="Contador-newcarrinho">{Newcarrinho.length}</button>
      </ContainerCarrinho>
      <h3>Produtos Escolhidos:</h3>
      <CheckoutDiv>
      {Newcarrinho.map(({id,imgURL, nome}) => (
        <ImagesCheckout key={id}>
        <img src={imgURL} alt={nome} />
        </ImagesCheckout>
      ))}
      </CheckoutDiv>
      <h3>Total Produtos: {totalQtd}</h3>
      <h3>Total: {precoTotal}</h3>
      <BtnLarge>Confirmar Compra</BtnLarge>
        <Footer/>
        </>
    )
}
export default Checkout