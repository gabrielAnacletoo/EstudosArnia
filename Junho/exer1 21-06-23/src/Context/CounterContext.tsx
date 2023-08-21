import { createContext } from 'react';

interface CounterContextType {
  counter: number;
  increment: () => void;
  decrement: () => void;
}

const CounterContext = createContext<CounterContextType>({
  counter: 0,
  increment: () => {},
  decrement: () => {},
})

export default CounterContext;
