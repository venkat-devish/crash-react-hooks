import React, { useEffect, useMemo, useState } from "react";

const ThemeToggler = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("Effect runs");
  }, [themeStyles]);

  const delayedFunction = (num) => {
    for (let i = 0; i <= 1000000000; i++) {}
    return num * 2;
  };

  const doubledNumber = useMemo(() => {
    return delayedFunction(number);
  }, [number]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prev) => !prev)}>Toggle Theme</button>
      <div style={themeStyles}>Number:{doubledNumber}</div>
    </div>
  );
};

export default ThemeToggler;
