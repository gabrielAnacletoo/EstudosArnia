import CounterContext from "../Context/CounterContext";
import CounterDisplay from "./CounterDisplay";
import { useContext } from 'react';

const CounterNew = () => {
    const counterContext = useContext(CounterContext)
   
  const handleIncrement = () => {
    counterContext.increment();
  }

  const handleDecrement = () => {
    counterContext.decrement();
  }

    return (
        <div>
        <CounterDisplay />
        <button onClick={handleIncrement}>Incrementar</button>
        <button onClick={handleDecrement}>Decrementar</button>
      </div>
    )
}

export default CounterNew