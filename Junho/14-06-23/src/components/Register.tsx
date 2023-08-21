//imports
import { CardBlue, Container } from "../style/style"
import { Link } from "react-router-dom"
import { useState , ChangeEvent} from 'react'
import axios from "axios";
import { loginService } from "../services/users/loginService";

//types & interface
interface UserTypesRegister {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const initialValues: UserTypesRegister = {
  name: '',
  email: '',
  password: '',
  repeatPassword: ''
}



//components
const Register = () => {
    const [userRegister, setUserRegister] = useState<Partial<UserTypesRegister>>(initialValues)

    const handleRegister = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserRegister((prevUserRegister) => ({
          ...prevUserRegister,
          [name]: value
        }))
      }

      const handleSubmit = async () => {
        if (!userRegister.name || !userRegister.email || !userRegister.password || !userRegister.repeatPassword) {
          console.log('All fields must be completed');
        } else if (userRegister.password !== userRegister.repeatPassword) {
          console.log('Passwords do not match');
        } else {
          try {
            const response = await axios.post(
              'https://arnia-kanban.vercel.app/api/user',
              {
                email: userRegister.email,
                password: userRegister.password,
                name: userRegister.name
              },
              {
                headers: {
                  'x-api-key': '52a8b954-e25d-4cc5-86e5-c32e92f994bb'
                }
              }
            );
            console.log(response.data);

            //usando loginservice de novo
            const loginResponse = await loginService({
              email: userRegister.email,
              password: userRegister.password
            })
            console.log(loginResponse.token);
      
            localStorage.setItem('AUTH_TOKEN', loginResponse.token);
      
          } catch (error) {
            console.log('Erro ao fazer a requisição:', error);
          }
        }
      }
      
      

    return (
      <Container>
       <CardBlue>
        <h1 className="h1cad">Arnia Trello</h1>
        <h3>Register</h3>

        <label htmlFor="name">Full Name</label>
        <input type="text" name="name" value={userRegister.name} onChange={handleRegister}/>

        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" value={userRegister.email} onChange={handleRegister}/>

        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={userRegister.password} onChange={handleRegister}/>

        <label htmlFor="repeatPassword">Repeat Password</label>
        <input type="password" name="repeatPassword" value={userRegister.repeatPassword} onChange={handleRegister}/>


        <button className="btnEntrar" onClick={handleSubmit}>Register</button>
        <Link to="/">Back</Link>

       </CardBlue></Container>
    )
}

export default Register