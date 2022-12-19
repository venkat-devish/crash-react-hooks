import React, { useContext } from "react";
import { CountContext } from "../../App";

const ComponentA = () => {
  const countCtx = useContext(CountContext);
  console.log(countCtx);
  return (
    <div>
      ComponentA
      <button onClick={countCtx.dispatchRef("INCREMENT")}>Increment</button>
    </div>
  );
};

export default ComponentA;
