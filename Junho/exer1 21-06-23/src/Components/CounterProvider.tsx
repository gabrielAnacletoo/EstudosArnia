import { ReactNode, useState } from 'react';
import CounterContext from '../Context/CounterContext';


type Props = {
    children: ReactNode; 
}

const CounterProvider = ({ children }: Props) => {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter((prevCounter) => prevCounter +1)
    console.log(counter) 
  }

  const decrement = () => {
    setCounter((prevCounter) => prevCounter - 1);
  }
  

  return (
    <CounterContext.Provider value={{ counter, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  )
}

export default CounterProvider;
