import React, { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState({
    name: "ronit",
    age: 23,
    gender: "male",
  });

  const [hi, setHi] = useState([]);




  
  return (
    <div>
      <p>Count: {count}</p>
      <p>name: {name}</p>
      <button onClick={() => setCount(count + 1)}>Click To increase</button>
      <button onClick={() => setCount(count - 1)}>Click TO decrease</button>
      <button onClick={() => setName()}>Click to change name</button>
    </div>
  );
};

export default State;
