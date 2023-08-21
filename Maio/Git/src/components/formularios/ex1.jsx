/*
Crie um formulário de endereço. Este formulário deverá pedir ao usuário o CEP, 
nome da rua, número, complemento, bairro, cidade e estado.
*/

// http://viacep.com.br/ws/01001000/json/

import { useState } from "react"
import { Button, Container } from "./styled"
import InputControl from "./input-control"


function delay (ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

export default function Ex1Form () {
  const [loading, setLoading] = useState(false)
  const [cep, setCep] = useState('')
  const [rua, setRua] = useState('')
  const [numero, setNumero] = useState('')
  const [complemento, setComplemento] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [estado, setEstado] = useState('')

  const pegarEndereco = async () => {
    if (cep.length !== 8) {
      return;
    }

    setLoading(true)

    try {
      await delay(300)
      const resposta = await fetch(`http://viacep.com.br/ws/${cep}/json/`)
      const dado = await resposta.json()

      setRua(dado.logradouro)
      setComplemento(dado.complemento)
      setBairro(dado.bairro)
      setCidade(dado.localidade)
      setEstado(dado.uf)

      setLoading(false)
    } catch (error) {
      console.error('DEU RUIM!!!');
    }
  }

  return (
    <Container>
      <h1>Formulário</h1>

      <InputControl label="CEP" id="cep" onChange={(event) => setCep(event.target.value)}>
        <Button onClick={pegarEndereco}>Busca por CEP</Button>
      </InputControl>

      <InputControl label="Rua" id="rua" onChange={(event) => setRua(event.target.value)} value={rua} />
      <InputControl label="Numero" id="numero" onChange={(event) => setNumero(event.target.value)} value={numero} />
      <InputControl label="Complemento" id="complemento" onChange={(event) => setComplemento(event.target.value)} value={complemento} />
      <InputControl label="Bairro" id="bairro" onChange={(event) => setBairro(event.target.value)} value={bairro} />
      <InputControl label="Cidade" id="cidade" onChange={(event) => setCidade(event.target.value)} value={cidade} />
      <InputControl label="Estado" id="estado" onChange={(event) => setEstado(event.target.value)} value={estado} />

      <Button disabled={loading} color="magenta">ENVIAR</Button>
    </Container>
  )
}