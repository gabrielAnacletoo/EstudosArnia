import GlobalStyle from "../GlobalStyle";
import LogoArnia from "../img/logo.png";
import { NavBarStyle } from "../styles"


const NavBarContent = () =>{
    return (
        <>  
        <GlobalStyle/>
        <NavBarStyle>
        <img src={LogoArnia} alt="Logo" />
        <h1>Loja Virtual</h1> 
        </NavBarStyle>
        </>
    )
}
export default NavBarContent