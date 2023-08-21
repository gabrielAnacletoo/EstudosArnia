import { ChangeEvent, useState, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { CardBlue } from '../style/style';
import { loginService } from '../services/users/loginService'
import { useNavigate } from "react-router-dom"


type Values = {
  email: string
  password: string
  name?: string;
}

const Form = () => {
  const [formData, setFormData] = useState<Values>({ email: '', password: '', name: '' });
  
  const navigate = useNavigate()


  const [errors, setErrors] = useState<Values>({
    email: '',
    password: ''

  })
  const [error, setError] = useState<string>("")

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ 
      ...prevFormData,
      [name]: value }));
  }

  const handleSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    setErrors({
      email: '',
      password: ''
    })

    if (formData.email === '') {
      setErrors(prev => ({
        ...prev,
        email: 'O Campo email obrigatório'
      }))
    }

    if (formData.password === '') {
      setErrors(prev => ({
        ...prev,
        password: 'O Campo password obrigatório'
      }))
    }

    if (formData.email === '' || formData.password === '') {
      return
    }

    try {
      const result = await loginService(formData)
      localStorage.setItem('AUTH_TOKEN', result.token)
      localStorage.setItem('AUTH_NAME', result.name)
      navigate('/Columns')
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message)
      }
    }
  }


  return (
    <>
    <CardBlue>
    {error !== '' && <h1>{error}</h1>}
      <h1 className='h1Form'>Arnia Trello</h1>
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        <p>{errors.email}</p>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
        <p>{errors.password}</p>

        <button type="submit" className="btnEntrar" onClick={handleSubmit}>Login</button>
      <Link to="/Register">Register</Link>
      </CardBlue>
    </>
  );
};

export default Form