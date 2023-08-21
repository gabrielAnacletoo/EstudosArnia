import { createGlobalStyle } from "styled-components";
import styled from "styled-components";


export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500&display=swap');
* {
   padding:0;
   margin: 0;
   box-sizing:border-box;
} 
body {
   background-color:#6C6C6C;
   font-family: 'Poppins';
   }
 .old {
  width:170px;
 }
 .imgsChoose {
   width: 150px;
   height:150px;
   border-radius: 50%;
 }

 .modal {
  position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5); /* Fundo opaco e transparente */
            display: flex;
            justify-content: center;
            align-items: center;
          }
  
          .modal-content {
            background-color: white;
            padding: 20px;
            border-radius: 5px;
          }
          
          .image-container {
            > p {
              display:block;
            }
            display: flex;
            gap: 10px;
            margin:15px 0 15px 0;
          }
          
          .imgsChoose {
            border: 2px solid black;
            border-radius: 5px;
          }
 .selected {
  border: 2px solid #f5d76e;
  box-shadow: 0 0 5px rgba(245, 215, 110, 0.8);
  transform: scale(1.05);
  transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
}

.selected:hover {
  border: 2px solid #f1c40f;
  box-shadow: 0 0 8px rgba(241, 196, 15, 0.8);
}
.btnnext {
  border-radius: 16px;
  background-color: #D5A139;
  color: #fff;
  cursor:pointer;

  border: 0px solid black;
  margin: 1px 0px 0px 10px;
  padding: 3px 20px 4px 20px;
  background-image: linear-gradient(to bottom, #D5A139, #F4C94A);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}
.imgPlay {
  cursor:pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 420px;
  transform: translate(-50%, -50%);
}

.finishbtn {
  position: relative;
  display: inline-block;
  padding: 12px 36px;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #fff;
  background: linear-gradient(135deg, #FDC830, #F37335);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  transition: background 0.3s, transform 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.finishbtn:before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #FDC830, #F37335);
  transform: skewX(-20deg);
  transition: transform 0.3s;
}

.finishbtn:hover {
  background: linear-gradient(135deg, #FDC830, #F79D00);
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.finishbtn:before {
  transform: skewX(-40deg);
}

.finishbtn:hover:before {
  transform: skewX(-20deg);
}

.finishbtn:focus {
  outline: none;
}



.select-menu {
  margin-right:2px;
  appearance: none;
  background-color: #f5f5f5;
  border: none;
  padding: 5px;
  font-size: 12px;
  border-radius: 5px;
  width: 200px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s ease;
}

.select-menu:hover {
  background-color: #e0e0e0;
}

.select-menu option {
  background-color: #f5f5f5;
  color: #333;
}
//dialog battle
.dialogbattle {
  margin-top:30px;
  width:400px;
  position:absolute;
  right:400px;
  background-color: black;
  opacity:0.7;
  top:100px;
}
.huntagain{
  margin-top: 30px;
}

.hp {
  margin-top:30px;
  width:400px;
  position:absolute;
  right:400px;
  background-color: black;
  opacity:0.7;
  left:292px;
  top:0;
}
.hunt {
  border-radius: 20px;
  background-color: #E74C3C;
  color: #fff;
  cursor: pointer;
  border:none;
  padding: 2px 10px 2px 10px;
}

`