import React, { useContext } from "react";
import { CountContext } from "../../App";
import ComponentD from "./ComponentD";

const ComponentB = () => {
  const countCtx = useContext(CountContext);
  console.log(countCtx);
  return (
    <div>
      <ComponentD />
    </div>
  );
};

export default ComponentB;
