import { useState } from 'react';
import './App.css';
import ListFruits from './components/ListFruits/ListFruits';

function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);
  return (
    <div className="App">
    <ListFruits fruits={fruits} setFruits={setFruits}/>
      
    </div>
  );
}

export default App;
