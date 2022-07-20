import { useState } from "react";
import "./style.css";

const ListFruits = () => {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  function filterRedFruits(){
    setFruits(fruits.filter(elem => elem.color === "red"))
  }
  const totalPrice = fruits.reduce((previousValue,currentValue) => previousValue + currentValue.price,0)
  return (
    <div className="container">
      <p>Preço total = {totalPrice}</p>
      <ul>
        {fruits.map((elem) => (
          <li>{elem.name}</li>
        ))}
      </ul>
      <button onClick={filterRedFruits}>Mostrar frutas vermelhas</button>
    </div>
  );
};
export default ListFruits;
