import styled from 'styled-components'


export const ContainerApp = styled.div`
display:flex;
width:100%;
justify-content:center;

height:100vh;
`

export const HeaderDiv = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
height:8%;
width:100%;
flex-direction:row;
background-color:#1A1033;
.meta{
    color: #fff;
    font-weight:500;
}
.vagas {
    color: #FBB04D;
    font-weight:600;
    font-style: italic;
}
` 
export const HeaderButtons = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
button {
    width:auto;
    margin-right:5%;
}
`