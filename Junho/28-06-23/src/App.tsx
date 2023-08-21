import { FormularioSt } from "./styles/style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'
import { useState } from "react";
import InputMask from 'react-input-mask'



type FormData = {
  name: string;
  email: string;
  telefone: string;
  cpf?: string;
  cnpj?: string
  date: Date;
  tecnologias: string[];
  password: string;
  confirmPassword: string;
}




const App = () => {
  const [isCpf, setIsCpf] = useState<boolean>(false)
  const [isCnpj, setIsCnpj] = useState<boolean>(false)
  const [isOhter, setIsOther] = useState<boolean>(false)


  const handleOther = () => {
    setIsOther(!isOhter)
  }

  const handlecpf = () =>{
    setIsCpf(true)
    setIsCnpj(false)
  }

  const handlecnpj = () =>{
    setIsCnpj(true)
    setIsCpf(false)

  }



  const schema = yup.object().shape({
    name: yup.string().required('O campo nome é obrigatório'),
    email: yup.string().email('Digite um email válido').required('O campo email é obrigatório'),
    telefone: yup.string().max(11, 'O número não pode ser maior que 11').required('O campo Telefone é obrigatório'),
    cpf: yup.lazy((value) =>
    !value && !isCnpj
      ? yup.string().min(11, 'O campo deve ter pelo menos 11 dígitos').required('O campo CPF é obrigatório')
      : yup.string()
  ),
  cnpj: yup.lazy((value) =>
    !value && !isCpf
      ? yup.string().min(14, 'O campo deve ter pelo menos 14 dígitos').required('O campo CNPJ é obrigatório')
      : yup.string()
  ),
    date: yup
      .date()
      .typeError('Digite uma data válida')
      .min(new Date(1900,0,1), 'A data mínima é 01/01/1900')
      .max(new Date(), 'A data máxima é a data atual')
      .required('O campo data é obrigatório'),
    tecnologias: yup
    .array()
    .min(1, 'Selecione pelo menos uma tecnologia')
    .required('O campo tecnologia é obrigatório'),
    password: yup.string().min(8, 'A senha deve ter pelo menos 8 caracteres').required('O Campo senha é obrigatório'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), undefined], 'As senhas devem ser iguais').required('O campo de confirmação deve ser válido')
  })


  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    console.log(data);
  }
   
  return (
    <>
    <FormularioSt>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label htmlFor="name">Nome</label>
            <input type="text" {...register('name')} autoComplete="off"/>
            {errors.name && <span>{errors.name.message}</span> }
          </div>

          <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" {...register('email')} autoComplete="off"/>
          {errors.email && <span>{errors.email.message}</span> }
          </div>

          <div>
          <label htmlFor="name">Telefone</label>
          <input type="number" {...register('telefone')} autoComplete="off"/>
          {errors.telefone && <span>{errors.telefone.message}</span> }
          </div>


          <div>
            <label htmlFor="cpfCnpj">CPF/CNPJ</label>
            <input type="radio" value="cpf" onClick={handlecpf} name="cpfCnpj" id="cpf"/>
            <input type="radio" value="cnpj" onClick={handlecnpj} name="cpfCnpj" id="cnpj"/>
            {isCpf && (
              <>
                <InputMask mask="999.999.999-99" type="text"  {...register('cpf', { maxLength: 11 })} placeholder="CPF"  autoComplete="off"/>
                {errors.cpf && <span>{errors.cpf.message}</span> }
              </>
            )}
            {isCnpj && (
              <>
                <InputMask mask="99.999.999/9999-99" type="text" {...register('cnpj', { maxLength: 14 })} placeholder="CNPJ" autoComplete="off"/>
                {errors.cnpj && <span>{errors.cnpj.message}</span> }
              </>
            )}
            </div>

          <div>
            <label htmlFor="date">Data de Nascimento</label>
            <input type="date" {...register('date')} />
            {errors.date && <span>{errors.date.message}</span> }

          </div>

          <div>
            <p>Tecnologias que domino</p>
            <label htmlFor="node">Node.js</label>
            <input type="checkbox"  id="node" value="Node.Js" {...register('tecnologias')} />

            <label htmlFor="javascript">Javascript</label>
            <input type="checkbox"  id="javascript" value="Javascript" {...register('tecnologias')}/>

            <label htmlFor="java">Java</label>
            <input type="checkbox" id="java" value="Java" {...register('tecnologias')}/>

            <label htmlFor="react">React</label>
            <input type="checkbox" id="react" value="React" {...register('tecnologias')}/>

            <label htmlFor="php">PHP</label>
            <input type="checkbox" id="php" value="PHP" {...register('tecnologias')}/>

            <label htmlFor="other">Outro</label>
            <input type="checkbox"  id="other"  onClick={handleOther} {...register('tecnologias')}/>
            {isOhter && 
            <input type="text" name="other" id="7"/>
            }
            {errors.tecnologias && <span>{errors.tecnologias.message}</span> }

          </div>

          <div>
            <label htmlFor="password">Senha</label>
            <input type="password" {...register('password')} />
            {errors.password && <span>{errors.password.message}</span> }

          </div>


          <div>
            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input type="password" {...register('confirmPassword')} />
            {errors.confirmPassword && <span>{errors.confirmPassword.message}</span> }

          </div>  

          <button type="submit">Enviar</button>

        </form>
    </FormularioSt>
    </>
  )
}

export default App;