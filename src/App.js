import { createContext } from "react";
import "./App.css";
import Counter_A from "./Hooks/useReducerHook/Counter_A";

function App() {
  return (
    <div className="App">
      <h1>CRASH USE CONTEXT HOOK</h1>
      <Counter_A />
    </div>
  );
}

export default App;
