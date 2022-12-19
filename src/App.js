import "./App.css";
import ParentComponent from "./Hooks/useCallbackHook/ParentComponent";

function App() {
  return (
    <div className="App">
      <h1>CRASH REACT HOOKS</h1>
      <ParentComponent />
    </div>
  );
}

export default App;
