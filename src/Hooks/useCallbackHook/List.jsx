import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
const List = ({ getItems }) => {
  const id = nanoid();
  console.log(id);
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("Updating items...");
    setItems(getItems());
  }, [getItems]);

  return items.map((item) => <div key={id}>{item}</div>);
};

export default List;
