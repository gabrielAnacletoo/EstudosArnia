import styled from "styled-components";


import LoginBG from "../assets/login.jpg";
export const Container = styled.div`
  background-image: url(${LoginBG});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100vh;
align-items:center;
justify-content:center;
> .imgsChoose {
  width:50px;
}
>.buttonEntrar {
  cursor:pointer;
  background: linear-gradient(to bottom, #FFD700, #FFB400);
  color: black;
  border: 2px solid #FFB400;
  border-radius: 20px;
  padding: 10px 20px;
  display: inline-block;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
}

.buttonEntrar::before,
.buttonEntrar::after {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid #FFB400;
  transform: rotate(45deg);
  background: inherit;
}

.buttonEntrar::before {
  top: -8px;
  left: -8px;
  clip-path: polygon(100% 0, 100% 50%, 50% 100%, 0 50%, 0 0);
}

.buttonEntrar::after {
  bottom: -8px;
  right: -8px;
  clip-path: polygon(0 0, 50% 100%, 100% 0, 100% 0, 0 50%);
}




`
export const NavTop = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  background-color: black;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  border-bottom: 3px solid #F8D668;
  border-radius: 0 0 50% 50%;

  > img {
    top: 2px;
    width: 120px;
    height: 100px;
    transition: transform 0.9s ease-in-out;
    z-index: 3;
  }

  > img:hover {
    transform: scale(1.1); /* Aumenta o tamanho em 10% */
  }
`;

export const BtnLogout = styled.button`
  border-radius: 16px;
  background-color: #D5A139;
  color: #fff;
  cursor:pointer;
  position:absolute;
  right:0;
  top: 0;
  border: 0px solid black;
  margin: 8px 20px 0px 0px;
  padding: 3px 20px 4px 20px;
  background-image: linear-gradient(to bottom, #D5A139, #F4C94A);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
`
export const NavContainer = styled.nav`
  width: 150px;
  display: flex;
  min-height: 300px; /* Altere de 'height' para 'min-height' */
  position: relative;
  margin: 2px 0px 0px 25px;
  flex-direction: column;

  > .chain {
    z-index: 1;
    width:7px;
    position: absolute;
    top: -10px;
    padding: 0;
    left: 2px;
  }
  .chainleft2 {
    z-index: 2;
    width:7px;
    position: absolute;
    top: -40px;
    padding: 0;
    left: 3px;
  }
> .inferiorInvent{
  z-index:999;
}
  > .chainRight {
    z-index: 1;
    width:7px;
    position: absolute;
    top: -10px;
    padding: 0;
    left: 140px;
  }
  > .chainRight2 {
    z-index: 1;
    width:7px;
    position: absolute;
    top: -10px;
    padding: 0;
    left: 140px;
  }
  > .boxtopper{
    z-index:9999;
    margin: 0 0 6px 0;
  }
  > .superiormenu {
    z-index: 99999;
  }
  > ul {
    list-style-type: none;
    align-items: center;
    padding: 0;
    border: none;
    margin: 0 0 0 7px;
  }
  
  > ul li {
    width:130px;
    margin-left:3px;
    background-color: black;
  }
  
  > ul > li > button {
    color: #ffffff;
    background-color: transparent;
    cursor: pointer;
    border: none;
  }
  
  > button {
    position:absolute;
    margin: 6px 0 3px 0;
    background-color: transparent;
    cursor: pointer;
    top: 288px;
    color: #ffffff;
    width: 80px;
    border: none;
  }
  
  > button > img.item-down {
    position:relative;
    top: -140px;
    left: 72.5px;
    width: 40px;
    vertical-align: middle;
  }
  p > .coins {
    position:absolute;
    top:287px;
    width:29px;
  }

  > .Mochila {
    padding:0;
    margin:0;
    position:absolute;
    z-index:2;
    top: 80px;
    left: 164px;
    width: 140px;
    border: 1px solid #696969;
    border-radius: 3px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  }

  > .inven {
    margin-left: 4px;
    max-width: 138px;
    border: 1px solid #696969;
    border-radius: 3px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  }
`;


//perfil
export const PhotoPerfil = styled.div`
margin: 5px 0 0 16px;
.onlineIndicator {
  width: 10px;
  height: 10px;
  top:13px;
  left:200px;
  border-radius: 50%;
  background-color: green;
  display: inline-block;
  position: absolute;
  animation: glowing 2s ease-in-out infinite;
  box-shadow: 0 0 5px 2px green;
}

@keyframes glowing {
  0% {
    box-shadow: 0 0 5px 2px green;
  }
  50% {
    box-shadow: 0 0 20px 5px green;
  }
  100% {
    box-shadow: 0 0 5px 2px green;
  }
}


.nomePerfil {
  background-color: black;
  color: #fff;
  position: absolute;
  left: 36px;
  top:10px;
  z-index: 4;
  font-weight: bold;
  }

> img {
  position: relative;
  width:170px;
  z-index: 4;
}
> .classes {
  z-index: 1;
  position: absolute;
  left: 32px;
  top: 90px;
  width: 147px;
  height: 140px;
  border-radius: 50%;
  filter: grayscale(100%);
}
`

//news
export const NewsContent = styled.div`
    border-radius: 10px;
  background-color: black;
  width: 1100px;
  height: 400px;
  position: relative;
  top: -450px;
  left: 200px;
  border: 3px solid #F8D668;
  
  > .content {
    color: #ffffff;
    margin: 40px 0 0 0;
    text-align: center;
    font-family: 'Courier New', Courier, monospace;
  }
  
  > .content small {
    color: #999B9D;
  }
  
  > .content a {
    font-weight: bold;
    color:#5D99F6;
    text-decoration: none;
  }
`;

//mapas e mobs


export const ForestContent = styled.div`
  border-radius: 10px;
  background-color: black;
  width: 1100px;
  height: 400px;
  position: relative;
  top: -450px;
  left: 200px;
  border: 3px solid #F8D668;
  
  > .content {
    color: #ffffff;
    margin: 0 0 0 0;
    text-align: center;
    font-family: 'Courier New', Courier, monospace;
  }
  > .content button {
  border-radius: 16px;
  background-color: #E74C3C;
  color: #fff;
  cursor: pointer;
  padding: 2px 10px 2px 10px;
  border: 0px solid black;
  background-image: linear-gradient(to bottom, #E74C3C, #C0392B);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  }
  > .content p {
    margin-top:20px;
  }
  > .content small {
    color: #999B9D;
  }

  > .content a {
    font-weight: bold;
    color:#5D99F6;
    text-decoration: none;
  }
  
`;
//mapa de caça
import BgHunterForest from "../assets/hunting/hunterforest.png"


export const MapHunterForest = styled.div`
height:394px;
border-radius:5px;
background-image: url(${BgHunterForest});
background-size: cover;
.mobs {
  margin: 0 0 0 830px;
  width: 245px;
  animation: swing 2s infinite ease-in-out alternate;
}

@keyframes swing {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
}
> button.huntagain {
  border-radius: 20px;
  background-color: #E74C3C;
  color: #fff;
  cursor: pointer;
  position: absolute;
  left: 400px;
  bottom: 0;
  border: 0px solid black;
  margin: 0 10px 25px 0px !important;
  padding: 8px 25px 8px 25px !important;
  background-image: linear-gradient(to bottom, #E74C3C, #C0392B);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}
> .atq {
  border-radius: 20px;
  background-color: #E74C3C;
  color: #fff;
  cursor: pointer;
  position: absolute;
  left: 5px;
  bottom: 0;
  border: 0px solid black;
  margin: 0 10px 25px 0px;
  padding: 8px 25px 8px 25px !important;
  background-image: linear-gradient(to bottom, #E74C3C, #C0392B);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}
> .hp-message{
  position: absolute;
  left:100px;
}
> button.escape {
  border-radius: 16px;
  background-color: #D5A139;
  color: #fff;
  cursor: pointer;
  position: absolute;
  left: 125px;
  bottom: 0;
  border: 0px solid black;
  margin: 0 10px 25px 0px;
  padding: 8px 25px 8px 25px !important;
  background-image: linear-gradient(to bottom, #D5A139, #F4C94A);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

`


export const CaveContent = styled.div`
  border-radius: 10px;
  background-color: black;
  width: 1100px;
  height: 400px;
  position: relative;
  top: -450px;
  left: 200px;
  border: 3px solid #F8D668;
  
  > .content {
    color: #ffffff;
    margin: 0px 0 0 0;
    text-align: center;
    font-family: 'Courier New', Courier, monospace;
  }
  
  > .content small {
    color: #999B9D;
  }
  
  > .content a {
    font-weight: bold;
    color:#5D99F6;
    text-decoration: none;
  }
`;
import BgHunterCave from "../assets/hunting/huntercave.jfif"

export const MapHunterCave = styled.div`
  height: 380px;
  border-radius: 5px;
  background-image: url(${BgHunterCave});
  background-size: 100% 100%;
  background-position: center;
.mobs {
  margin: 0 0 0 830px;
  width: 245px;
  animation: swing 2s infinite ease-in-out alternate;
}

@keyframes swing {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
}

> button.huntagain {
  border-radius: 20px;
  background-color: #E74C3C;
  color: #fff;
  cursor: pointer;
  position: absolute;
  left: 400px;
  bottom: 0;
  border: 0px solid black;
  margin: 0 10px 25px 0px !important;
  padding: 8px 25px 8px 25px !important;
  background-image: linear-gradient(to bottom, #E74C3C, #C0392B);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}
> .atq {
  border-radius: 20px;
  background-color: #E74C3C;
  color: #fff;
  cursor: pointer;
  position: absolute;
  left: 10px;
  bottom: 0;
  border: 0px solid black;
  margin: 0 10px 25px 0px;
  padding: 8px 25px 8px 25px !important;
  background-image: linear-gradient(to bottom, #E74C3C, #C0392B);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}
> .hp-message{
  position: absolute;
  left:100px;
}
> button.escape {
  border-radius: 16px;
  background-color: #D5A139;
  color: #fff;
  cursor: pointer;
  position: absolute;
  left: 125px;
  bottom: 0;
  border: 0px solid black;
  margin: 0 10px 25px 0px;
  padding: 8px 25px 8px 25px !important;
  background-image: linear-gradient(to bottom, #D5A139, #F4C94A);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

`

export const DungeonContent = styled.div`
  border-radius: 10px;
  background-color: black;
  width: 1100px;
  height: 320px;
  position: relative;
  top: -450px;
  left: 200px;
  border: 3px solid #F8D668;
  
  > .content {
    color: #ffffff;
    margin: 25px 0 0 0;
    text-align: center;
    font-family: 'Courier New', Courier, monospace;
  }
  
  > .content small {
    color: #999B9D;
  }
  
  > .content a {
    font-weight: bold;
    color:#5D99F6;
    text-decoration: none;
  }
`;

//buton explore
export const BtnExplore = styled.button`
  border-radius: 16px;
  background-color: #D5A139;
  color: #fff;
  cursor:pointer;
  border: 0px solid black;
  padding: 2.5px 13px 5px 20px;
  background-image: linear-gradient(to bottom, #D5A139, #F4C94A);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);

`;
