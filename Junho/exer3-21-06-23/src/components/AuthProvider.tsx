import { ReactNode } from 'react';
import AuthContext from '../Context/AuthContext';

type User = {
  name: string;
  age: number;
}

type Props = {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const user: User = {
    name: 'gabriel',
    age: 29,
  }

  const authContextValue = {
    isAuthenticated: true,
    user,
  }

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
