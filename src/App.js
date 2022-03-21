import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Meun from './components/Meunbar/Meun';
import Product from './components/AllProduct/Product';
import { useState } from 'react';


function App() {
  const [count, setCount] = useState(0)
  const SetCount = () => setCount(count + 1)
  return (
    <div className="App container">
      <Meun count={count}></Meun>
      <Product SetCount={SetCount}></Product>
    </div>
  );
}

export default App;
