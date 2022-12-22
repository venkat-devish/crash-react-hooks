import React, { useReducer } from "react";

const initialState = {
  count: 0,
  reading: 10,
};
const reducerFn = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.value };
    case "DECREMENT":
      return { ...state, count: state.count - action.value };
    case "INCREMENT5":
      return { ...state, count: state.count + action.value };
    case "DECREMENT5":
      return { ...state, count: state.count - action.value };
    case "INCREMENT_READING":
      return { ...state, reading: state.reading + action.value };
    case "DECREMENT_READING":
      return { ...state, reading: state.reading - action.value };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};
const Counter_A = () => {
  const [countState, dispatchFn] = useReducer(reducerFn, initialState);
  return (
    <div>
      <h1>Count: {countState.count}</h1>
      <h2>Reading: {countState.reading}</h2>
      <div>
        <button
          onClick={() => {
            dispatchFn({ type: "INCREMENT", value: 1 });
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatchFn({ type: "DECREMENT", value: 1 });
          }}
        >
          Decrement
        </button>
      </div>
      <button
        onClick={() => {
          dispatchFn({ type: "RESET" });
        }}
      >
        Reset
      </button>
      <div>
        <button
          onClick={() => {
            dispatchFn({ type: "INCREMENT", value: 5 });
          }}
        >
          Increment5
        </button>
        <button
          onClick={() => {
            dispatchFn({ type: "DECREMENT", value: 5 });
          }}
        >
          Decrement5
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            dispatchFn({ type: "INCREMENT_READING", value: 15 });
          }}
        >
          Increment Reading
        </button>
        <button
          onClick={() => {
            dispatchFn({ type: "DECREMENT_READING", value: 15 });
          }}
        >
          Decrement Reading
        </button>
      </div>
    </div>
  );
};

export default Counter_A;
