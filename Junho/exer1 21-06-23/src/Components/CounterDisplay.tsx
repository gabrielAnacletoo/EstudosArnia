import { useContext } from 'react';
import CounterContext from '../Context/CounterContext';

const CounterDisplay = () => {
  const counterContext = useContext(CounterContext);

  return <div>Contador: {counterContext.counter}</div>;
}

export default CounterDisplay
