import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [count, setCount] = useState(0);

  const Adicionar = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const Remover = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="app">
      <h1>Contador</h1>
      <div className="counter">
        <button onClick={Remover}>-</button>
        <span>{count}</span>
        <button onClick={Adicionar}>+</button>
      </div>
    </div>
  );
};

export default App;
