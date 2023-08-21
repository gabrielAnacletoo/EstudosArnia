import { useContext } from 'react';
import AuthContext  from '../Context/AuthContext';

const UserProfile = () => {
  const userprofile = useContext(AuthContext);

  if (!userprofile) {
    throw new Error('AuthContext não encontrado.');
  }
//desestrutura isAuthenticated e user de userprofile
  const { isAuthenticated, user } = userprofile;
  //agora que temos user, desestruramos ele também
  const { name, age } = user;

  return (
    <>
      <div>
        <p>{name}</p>
        <p>{age}</p>
        <p>{isAuthenticated ? 'Autenticado' : 'não autenticado  ' }</p>
      </div>
    </>
  );
};

export default UserProfile;
