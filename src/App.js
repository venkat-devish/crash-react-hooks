import { createContext } from "react";
import "./App.css";
import Component_C from "./components/useContextHook/Component_C";

export const UserContext = createContext();
export const ChannelContext = createContext();

function App() {
  return (
    <div className="App">
      <h1>CRASH USE CONTEXT HOOK</h1>
      <UserContext.Provider value={"User Prop"}>
        <ChannelContext.Provider value={"Channel Prop"}>
          <Component_C />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
