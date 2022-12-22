import { createContext, useReducer } from "react";
import "./App.css";
import ComponentA from "./Hooks/useReducerMatesUseContext/ComponentA";
import ComponentB from "./Hooks/useReducerMatesUseContext/ComponentB";
import ComponentC from "./Hooks/useReducerMatesUseContext/ComponentC";

export const CountContext = createContext();

const initialState = 0;
const reducerFn = (state, action) => {
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

function App() {
  const [state, dispatch] = useReducer(reducerFn, initialState);
  return (
    <CountContext.Provider
      value={{ countState: state, dispatchCount: dispatch }}
    >
      <div className="App">
        <h1>CRASH REACT HOOKS</h1>
        <h1>Count: {state}</h1>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CountContext.Provider>
  );
}

export default App;
