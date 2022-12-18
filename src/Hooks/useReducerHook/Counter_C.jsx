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

const Counter_C = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <div>
      <h4>Count : {count}</h4>
      <h4>Count2 : {countTwo}</h4>
      <div>
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
      <div>
        <button
          onClick={() => {
            dispatchTwo("INCREMENT");
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatchTwo("DECREMENT");
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            dispatchTwo("RESET");
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter_C;
