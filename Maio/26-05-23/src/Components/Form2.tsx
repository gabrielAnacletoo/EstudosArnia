// Crie um projeto React com Typescript utilizando o vite. 
// Neste projeto crie um formulário de cadastro de um endereço de um site.
//  Coloque um botão que ao ser clicado, deverá buscar os dados do endereço a partir do CEP.
//   Faça a tipagem correta da função que retorna o endereço, para que o typescript possa validar
//    corretamente (proibido usar any).
// Crie um tipo chamado Address. 
// Para criar um estado do tipo Address, faça o comando a seguir:
// const [address, setAddress] = useState<Address>({})
// Resolva o bug que vai estourar na linha acima. Salve todas as informações de endereço neste objeto.
// API de endereço: viacep.com.br/ws/${cep}/json/
import { ChangeEvent, useState } from "react";
import { Formulario, Container, BtnCep } from "../assets/Styles";
import axios from  "axios"

type Address = {
    cep: string
    logradouro: string
    complemento: string
    bairro: string
    localidade: string
    uf: string;
    ddd: string
}
const Form2 = () => {
    const [address, setAddress] = useState<Address>({
        cep: "",
        logradouro: "",
        complemento: "",
        bairro: "",
        localidade: "",
        uf: "",
        ddd: ""
    })

    //O Axios já converte os dados
    //da resposta para um objeto JavaScript, então você não precisa chamar o método JSON().
    const handleCepChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const CepNumber = event.target.value;

        setMostrarCep(false)
        try {
         const response = await axios.get(`https://viacep.com.br/ws/${CepNumber}/json/`);
         const data = response.data;
         setAddress({
            cep: data.cep,
            logradouro: data.logradouro,
            complemento: data.complemento,
            bairro: data.bairro,
            localidade: data.localidade,
            uf: data.uf,
            ddd: data.ddd
         })
        } catch (error) {
            console.log('Cep está sendo alterado');
        }
    }
    const [mostrarCep, setMostrarCep] = useState(false)
    
    const HandleClick = () => {
        setMostrarCep(true);
    }
    return (
        <Container>
            <Formulario>
            <label htmlFor="cep">CEP:</label>
              <input type="text" name="cep" onChange={handleCepChange} maxLength={8} />

            <BtnCep onClick={HandleClick}>Consultar CEP</BtnCep>        
            </Formulario>
            {mostrarCep &&
            <div>
          <p><b>Cidade:</b>{address.localidade} &nbsp;&nbsp; <b>UF:</b> {address.uf}</p>
          <p><b>Lograduro:</b> {address.logradouro}</p>
          <p><b>Bairro:</b> {address.bairro}</p>
          <p><b>DDD</b>: {address.ddd}</p>
        </div>}
        </Container>
    )
}

export default Form2