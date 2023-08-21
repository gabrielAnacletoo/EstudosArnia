// Exercício 4: Gere um projeto Typescript/React utilizando o Vite. 
// No seu app.tsx, crie um tipo chamado UserData. Este tipo deverá conter nome, 
// idade e gênero. 
// Crie um estado que seja deste tipo (lembre-se dos genéricos) e 
// faça um formulário para preencher este estado.

import React, { useState } from "react"

type UserData = {
    name: string
    age: number
    gender: string
}

const App = () =>{
    const [userData, setUserData] = useState<UserData | null>(null)
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
        };
    return (

    )
}