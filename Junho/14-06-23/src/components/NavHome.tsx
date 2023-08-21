import { ContainerNav, Menulateral, MenuDireito } from "../style/style";
import { Link } from 'react-router-dom';

const NavHome = () => {
  const name = localStorage.getItem('AUTH_NAME');
  
  const handleLogout = () => {
    localStorage.removeItem('AUTH_TOKEN');
  }


  return (
    <>
      <ContainerNav>
        <MenuDireito><h1>Arnia Trello</h1></MenuDireito>
        <Menulateral>
          <h3>
            Hello, {name}&nbsp;
            <small><Link to="/" onClick={handleLogout}>Logout</Link></small>
          </h3>
        </Menulateral>
      </ContainerNav>
    </>
  );
};

export default NavHome;
