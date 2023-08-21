import { createContext } from "react";

//type
type ThemeContextType = {
    theme: 'light' | 'dark'
    alterarTema: () => void;
}

//estado inicial
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)


export default ThemeContext