import React, { useState } from "react";

const UseState_B = () => {
  const [count, setCount] = useState(0);

  const incrementByValue = () => {
    for (let i = 0; i < 7; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
      <h4>Count: {count}</h4>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
      <button onClick={incrementByValue}>Increment 7</button>
    </div>
  );
};

export default UseState_B;
