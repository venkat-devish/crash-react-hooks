import React, { useContext } from "react";
import { CountContext } from "../../App";

const ComponentD = () => {
  const countCtx = useContext(CountContext);
  return (
    <div>
      ComponentD
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

export default ComponentD;
