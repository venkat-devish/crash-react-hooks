import React, { useState } from "react";
import List from "./List";

const ToggleTheme = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = () => {
    return [number, number + 1, number + 1];
  };

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onChange={() => setDark((prev) => !prev)}>Toggle Theme</button>
      <List getItems={getItems} />
    </div>
  );
};

export default ToggleTheme;
