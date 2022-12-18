import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const Counter_A = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h4>Count : {count}</h4>
      <button
        onClick={() => {
          dispatch("INCREMENT");
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch("DECREMENT");
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch("RESET");
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter_A;
