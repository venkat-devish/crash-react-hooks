import React, { useContext } from "react";
import { CountContext } from "../../App";

const ComponentF = () => {
  const countCtx = useContext(CountContext);
  return (
    <div>
      ComponentF
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

export default ComponentF;
