import styled from "styled-components";


export const NavBarStyle = styled.nav`
margin: 0 auto;
display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #6950A1;
  width: 545px;
  height: 65px;

  > img {
  margin-left: 10px;
  }
  > h1 {
    margin-right:15px;
    color: #FFF;
  }
`;


export const Container = styled.div`
> .Contador-carrinho {
  margin: 0 auto;
  background-color: #6950A1;
  border-radius: 10px;
  color: #fff;
  font-weight: 700;
  padding: 2px 15px;
  border: none;
  /* margin: 0 0 0 0; */
  cursor: pointer;
}

h1 {
  margin: 0 240px 0 -5px; 
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
}
  width: 835px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; 
  align-items: center;
  margin: 0 0 0 202px; 
`;

export const Checkbox = styled.input`
appearance: none;
width: 22px;
height: 22px;
border-radius: 4px;
background-color: #6950A1;
outline: none;
position: relative;
top: 3px;
cursor: pointer;

&:checked {
  background-color: #6950A1;
}

&:checked::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 7px;
  transform: translate(0, -50%);
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
`;




export const ImagesGames = styled.div`
  width: calc(34.63% - 10px);
  margin: 0 0 15px 0; 
  
  > img {
    width: 120px;
  }
`;

export const CheckoutDiv = styled.div`
  width: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; 
  align-items: center;
  margin: 5px 0 5px 400px; 
`;


export const ImagesCheckout = styled.div`
   width: calc(20% - 10px);
   margin:10px; 
   padding: 0;
  > img {
    width: 100px;
  }
`;




export const BtnLarge = styled.button`
cursor: pointer;
margin: 0 0 0 596px;
border: none;
border-radius: 8px;
padding: 6px;
color: #FFF;
background-color: #6950A1;
font-family: 'Poppins';
font-weight: 600;
font-size: 17px;
`
export const Precos = styled.div`

>  p {
    margin: 0 0 0 33px;
    display: inline-block;
}`

export const FooterStyle = styled.div`
  > img{
    margin-left:40px;
  }
  > p {
    font-size: 11px;
    font-weight: 400;
    text-align: start;
    margin-left: 5px;
  }
  max-width: 540px;
  border: 3px solid #6950A1;
  margin: 10px auto; /* Centraliza horizontalmente */
  text-align: center; /* Centraliza verticalmente */
`;

export const CarrinhoConteudo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 120px; 
 flex-wrap: wrap;
> .total {
  position: relative;
  left: -155px;
  font-weight: 700;
}
`;

export const ImagesCarrinhos = styled.div`
  width: calc(35.63% - 10px);
  display:inline-block;
  margin: 0 0 10px 10px;
 
  > p {
    position: relative;
    font-size: 1rem;
    font-weight: 700;
    top: -18px;
    margin:0 0 10px -10px;
    padding: 0;
}
  > button {
    position: relative;
    top: -17px;
    left: -13px;
    cursor: pointer;
    font-weight: 800;
    font-size: 25px;
    color: #fff;
    border: none;
    border-radius: 6px;
    padding: 2px 13px;
    margin-left: 3px;
    background-color: #6950A1;
  }
  > img {
    width: 120px;
    margin-right: 10px; 
  }
 
`;

export const BtnFinalizar = styled.button`
cursor: pointer;
margin: 15px 0 15px -215px;
border: none;
border-radius: 8px;
padding: 6px;
color: #FFF;
background-color: #6950A1;
font-family: 'Poppins';
font-weight: 600;
font-size: 17px;
`



export const ContainerCarrinho = styled.div`
> .Contador-newcarrinho {
  background-color: #6950A1;
  border-radius: 10px;
  color: #fff;
  font-weight: 700;
  padding: 2px 15px;
  border: none;
  margin: 30px auto;
  cursor: pointer;
}

h1 {
  margin: 0 229px 0 212px; 
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
}
  width: 835px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; 
  align-items: center;
  margin: 0 0 0 197px; 
`;


