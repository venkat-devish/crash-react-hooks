import React, { useReducer } from "react";

const initialState = {
  startCount: 0,
  secondaryCount: 0,
};
const reducerFn = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, startCount: state.startCount + action.value };
    case "DECREMENT":
      return { ...state, startCount: state.startCount - action.value };
    case "INCREMENT2":
      return { ...state, secondaryCount: state.secondaryCount + action.value };
    case "DECREMENT2":
      return { ...state, secondaryCount: state.secondaryCount - action.value };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const Counter_B = () => {
  const [state, dispatch] = useReducer(reducerFn, initialState);
  return (
    <div>
      <h3>Count: {state.startCount}</h3>
      <h3>Secondary: {state.secondaryCount}</h3>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT", value: 1 });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT", value: 1 });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT", value: 5 });
        }}
      >
        Increment 5
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT", value: 5 });
        }}
      >
        Decrement 5
      </button>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT2", value: 1 });
        }}
      >
        Increment2
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT2", value: 1 });
        }}
      >
        Decrement2
      </button>
    </div>
  );
};

export default Counter_B;
