import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface FormData {
  name: string;
  email: string;
  hobbies: string[];
}

const schema = yup.object().shape({
  name: yup.string().required('O campo nome é obrigatório'),
  email: yup.string().email('Digite um email válido').required('O campo email é obrigatório'),
  hobbies: yup.array().min(1, 'Selecione pelo menos uma opção').required('O campo hobbies é obrigatório'),
});

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nome:</label>
        <input {...register('name')} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <label>Hobbies:</label>
        <select {...register('hobbies')} multiple>
          <option value="reading">Leitura</option>
          <option value="sports">Esportes</option>
          <option value="music">Música</option>
          <option value="cooking">Culinária</option>
        </select>
        {errors.hobbies && <p>{errors.hobbies.message}</p>}
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
