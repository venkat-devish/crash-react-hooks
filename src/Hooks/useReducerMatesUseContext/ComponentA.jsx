import React, { useContext } from "react";
import { CountContext } from "../../App";

const ComponentA = () => {
  const countCtx = useContext(CountContext);
  return (
    <div>
      ComponentA
      <div>
        <button
          onClick={() => {
            countCtx.dispatchCount("INCREMENT");
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            countCtx.dispatchCount("DECREMENT");
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            countCtx.dispatchCount("RESET");
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ComponentA;
