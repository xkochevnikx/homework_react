import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function Increment() {
    setCount(count + 1);
  }

  function Decrement() {
    setCount(count - 1);
  }

  //? связывание инпута и стейта называется двухстороннее связывание подобные компоненты называются управляемыми поскольку изменив значение мы следом изменяем состояние
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
