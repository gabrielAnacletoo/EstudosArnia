import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

type LoginFormInputs = {
  email: string;
  password: string;
}


//podemos usar a tipagem

/*
type values = yup.InferType<typeof schema>
assim todos os tipos seram o que tem no schema
*/

const App = () => {
  const schema = yup.object().shape({
    email: yup.string().email('Digie um email válido').required('O email é obrigatório'),
    password: yup.string().min(6, 'A Senha deve ter pelo menos 6 caracteres').notOneOf([yup.ref('email')], 'A senha não pode ser igual ao email'),
  })


  //desestruturando o useForm
  const { register, handleSubmit, formState: {errors } } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data)
  }


  return (
   <form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <label htmlFor="email">email</label>
      <input {...register('email')}/>
      {errors.email && <span>{errors.email.message}</span>}
    </div>
    
    <div>
      <label htmlFor="senha">senha</label>
      <input type="password" {...register('password')} />
      {errors.password && <span>{errors.password.message}</span>}
    </div>

    <button type="submit">Enivar</button>
   </form>
  )
}

export default App;