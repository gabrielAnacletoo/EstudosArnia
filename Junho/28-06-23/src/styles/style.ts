import styled from 'styled-components'

export const FormularioSt = styled.div`
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
display:flex;
align-items:center;
justify-content:center;
input {
    padding:5px;
    border-radius:5px;
    border: 1px solid dimgray; 
}
button {
    cursor:pointer;
    color: #fff;
    padding:5px 25px;
    border:none;
    border-radius:2px;
    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
    background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
}
`