import styled from 'styled-components'


export const ContainerNav = styled.div`
display:flex;
justify-content:space-between;
background-color:#3A72F8;
height:60px;
color: #fff;
align-items:center;
font-family: 'Poppins', sans-serif;
@media (max-width: 768px) {
    h1 {
        font-size:18px;
    }
    a {
        color: #fff;
    }
    h3 {
        margin-right:10px;
        font-size:12px;
    }
   img { 
        position:absolute;
        top:20px;
        right:10px;
        width:22px;
    }
 }
`

export const MenuDireito = styled.div`
margin-left:20px;`
export const Menulateral = styled.div`
margin-right:30px;`


export const Column = styled.div`
  background-color: #EAEAEA;
  width: 25%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items:center;
  border-radius:10px;
  height:100vw;
  > h1 {
    text-align: center;
    color: #3A72F8;
  }
`;

export const ColumnsStyled = styled.div`
  font-family: 'Poppins', sans-serif;
  width: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 30px auto;
  gap: 10px;

  @media (max-width: 768px) {
    overflow-x: auto;
    flex-wrap: nowrap;
    scroll-snap-type: x mandatory;

    &::-webkit-scrollbar {
      display: none;
    }

    > ${Column} {
      width: calc(50% - 10px);
      flex: 0 0 auto;
      scroll-snap-align: center;
    }
  }
`;




export const Cards = styled.div`
background-color:#fFF;
width:95%;
height:auto;
border-radius:12px;
margin-bottom:30px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
color:#575757;
> div {
    overflow-wrap: break-word;
}
> button {
    border:none;
    background-color:transparent;
}
> button > img {
   width:17px;
}
> .textarea {
    font-size:20px; 
    margin: 5px 0 0 0;
    width:85%;
    border:1px solid #575757;
    border-radius: 15px;
    padding: 2px 5px 90px 15px;
    
}
> .inputTitle {
    font-size:20px;
    margin-top:5px;
    width:85%;
    border-radius: 15px;
    border:1px solid #575757;
    padding: 2px 5px 2px 10px;
}
`
export const Btns = styled.div`
margin:2px 0 20px 0;
display: flex;
flex-direction:row;
justify-content: space-evenly;
align-items:center;
.BtnSave {
    cursor: pointer;
    background-color:transparent;
    color:#3A72F8;
    padding: 5px 15px 5px 15px;
    border:1px solid #0A2668;
    border-radius: 10px;
    font-weight:bold;
}
.BtnCancel {
    cursor: pointer;
border:none;
border-radius: 10px;
padding: 5px 20px 5px 20px;
background-color:#0A2668;
color: #fff;;
font-weight:bold;
}
>button {
    margin-top:10px;
    border:none;
    background-color:transparent;
}
>button > img {
    cursor: pointer;
    width:18px;
}

`
export const Error404 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Container = styled.div`
  margin: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 10px;
  }
`;

export const CardBlue = styled.div`
  background: linear-gradient(135deg, #3A72F8, #6C00FF);
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  width: 420px;
  height: 600px;
  align-items: center;
  color: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 1);

  > a {
    color: #fff;
  }

  a:hover {
    color: #D8D8D8;
  }

  > label {
    display: flex;
    justify-content: flex-start;
    width: 330px;
    margin-bottom: 5px;
  }

  > input {
    padding-left: 15px;
    margin-bottom: 5px;
    height: 30px;
    width: 330px;
    border: none;
    border-radius: 25px;
  }

  > .btnEntrar {
    cursor: pointer;
    margin: 50px 0 30px;
    font-size: 15px;
    padding: 7px 30px 7px 30px;
    border: none;
    border-radius: 14px;
    color: #FFF;
    background-color: #0A2668;
    font-weight: bold;
  }

  @media (max-width: 768px) {

    width: 100%;
    max-width: 420px;
    height: auto;
    padding: 20px;
    > label{
        margin-left:60px;
    }
    > input {
      width: 100%;
    }

    > .btnEntrar {
      width: 100%;
    }
  }
`;



//modal 
export const ModalDelete = styled.div`
width:400px;
left: 37%;
text-align:center;
position:absolute;
background-color: #fff;
border-radius:15px;
border: 1px solid dimgray;
height: 150px;
> p {
    margin: 30px auto;
}
> div {
    display:flex;
    justify-content:space-evenly;
}
> div>.btnNot {
    cursor: pointer;
    background-color:transparent;
    color:#3A72F8;
    padding: 5px 15px 5px 15px;
    border:1px solid #0A2668;
    border-radius: 10px;
    font-weight:bold;
}
> div>.btnYeah {
cursor: pointer;
border:none;
border-radius: 10px;
padding: 5px 20px 5px 20px;
background-color:#0A2668;
color: #fff;;
font-weight:bold;
}
`

