import React, { useState } from "react";

const UseState_D = () => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([
      ...items,
      { id: Math.random() * 10, value: Math.floor(Math.random() * 11) + 1 },
    ]);
  };
  return (
    <div>
      <button onClick={addItem}>Add a number</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseState_D;
