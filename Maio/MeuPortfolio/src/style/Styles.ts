import styled from "styled-components"

export const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  font-size: 2.5vh;
  font-weight: 600;
  padding: 0;
  > ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    border: none;
    margin: 0%;
  }
  .JScenter {
    font-size: 3rem;
  }
  > ul li {
    margin-right: 100px;
  }
  > ul li a{
    color: #fff;
    text-decoration:none;
  }
`;

export const PrincipalContent = styled.div`
>img {
border-radius: 50%;
width:200px;
}

`


export const Container = styled.div`
`