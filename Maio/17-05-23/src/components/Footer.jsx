import { FooterStyle } from "../styles"
import Boleto from "../img/boleto.png"
import Hipercad from "../img/hipercard.png"
import MasterCard from "../img/mastercard.png"
import Visa from "../img/visa.png"

const Footer = () => {
    return (
        <>
        <FooterStyle>
        <p>Meios de pagamento:</p>
        <img src={Visa} /> 
        <img src={MasterCard}/> 
        <img src={Boleto}/> 
        <img src={Hipercad}/>
        </FooterStyle>
        </>
    )
}
export default Footer