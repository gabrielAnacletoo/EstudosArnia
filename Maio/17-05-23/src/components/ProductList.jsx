import NavBarContent from "./NavBarContent";
import ProductsContent from "./ProductsContent";
import Footer from "./Footer";
import { Container, BtnLarge } from "../styles";
import GlobalStyle from "../GlobalStyle";

const ProductList = () => {

  return (
  <>
      <GlobalStyle />
        <NavBarContent/>
               <Container>
              <ProductsContent/>
        </Container>
        <Footer/>
    </>
  );
};

export default ProductList;
