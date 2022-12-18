import React, { useEffect, useState } from "react";

const UseEffect_B = () => {
  const [count, setCount] = useState(0);

  const timer = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const interval = setInterval(timer, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

export default UseEffect_B;
