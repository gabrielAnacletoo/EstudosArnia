import { NavTop } from "../style/styles";
import CenterLog from "../assets/transferir.png";

// interface NavTpProps {
//   nameUsuario: string | null | undefined;
//   emailUser: string | null | undefined;
// }

const NavTp = () => {
  return (
    <>
      <NavTop>
        <img src={CenterLog} alt="CenterLog" />
      </NavTop>
    </>
  );
};

export default NavTp;
