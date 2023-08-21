import { createContext } from 'react'

type User = {
    name: string;
    age: number;
}

export type AuthContextType = {
    isAuthenticated: boolean;
    user: User;
}

const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    user:{
        name: '',
        age: 0
    }
})
export default AuthContext;