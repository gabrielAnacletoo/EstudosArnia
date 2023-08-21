import CounterNew from './Components/CounterNew';
import CounterProvider from './Components/CounterProvider';

const App = () => {
  
  return (
    <CounterProvider>
      <CounterNew/>
    </CounterProvider>
  );
};

export default App;
