import { ReactNode, useState } from "react";
import ThemeContext from "../Context/ThemeContext";


type Props = {
    children: ReactNode;
}


const ThemeProvider = ({children}: Props) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');


const alterarTema = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
}


return (
    <ThemeContext.Provider value={{theme, alterarTema}}>
        {children}
    </ThemeContext.Provider>
)
}
export default ThemeProvider