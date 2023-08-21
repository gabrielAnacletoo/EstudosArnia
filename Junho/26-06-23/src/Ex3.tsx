import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'

interface FormData {
    name: string;
    email: string;
    date: Date;
  }

const Ex3 = () => {

    const schema = yup.object().shape({
        name: yup.string().required('O campo nome é obrigatório'),
        email: yup.string().email('Digite um email válido').required('O campo email é obrigatório'),
        date : yup
        .date()
        .typeError('Digite uma data válida')
        .min(new Date(1900,0,1), 'A Data mínima é 01/01/1900')
        .max(new Date(), 'A data máxima é a data atual')
        .required('O campo data é obrigatório'),
    })

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data: FormData) => {
console.log(data)
    }

    return (
    <form onSubmit={handleSubmit(onSubmit)}>
       <div>
       <label htmlFor="name">Nome</label>
        <input {...register('name')} />
        {errors.name && <span>{errors.name.message}</span> }
       </div>
        
       <div>
       <label htmlFor="email">Email</label>
        <input type="email" {...register('email')} />
        {errors.email && <span>{errors.email.message}</span> }
       </div>

       <div>
       <label htmlFor="date">Data</label>
        <input type="date" {...register('date')} />
        {errors.date && <span>{errors.date.message}</span> }
       </div>


        <button type="submit">Enviar</button>

    </form>
    
        )
}

export default Ex3;