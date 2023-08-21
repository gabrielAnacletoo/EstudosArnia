import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from 'yup'


type RegisterInputs = {
    name:string;
    email: string;
    password: string;
    confirmPassword: string;
}
const Ex2 = () => {
  const validationSchema = yup.object().shape({
    name: yup.string().required('O nome é obrigatório'),
    email: yup.string().email('Digite um email válido'). required('O  email é obrigatório'),
    password: yup.string().min(6, 'A senha deve ter pelo menos 6 digitos').required('A senha é obrigatória'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), undefined], 'As senhas devem ser iguais').required('A confirmação de senha é obrigatória'),
  })
  
  
const { register, handleSubmit, formState: { errors } } = useForm<RegisterInputs>({
    resolver: yupResolver(validationSchema),
});

const onSubmit = (data: RegisterInputs) => {
    console.log(data)
}

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="nome">Nome</label>
                <input {...register('name')}/>
                {errors.name && <span>{errors.name.message}</span> }
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input {...register('email')}/>
                {errors.email && <span>{errors.email.message}</span> }
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type="password" {...register('password')}/>
                {errors.password && <span>{errors.password.message}</span> }
            </div>

            <div>
                <label htmlFor="confirmPassword">Confirm password</label>
                <input type="password"{...register('confirmPassword')}/>
                {errors.confirmPassword && <span>{errors.confirmPassword.message}</span> }
            </div>
            <button type="submit">Enviar</button>
        </form>
    
  )
}

export default Ex2;