import React from "react";

import "./App.css";
import Counter from "./Components/Counter";
import Todos from "./Components/Todos";

// TypeScript only helps in writting bugFree code but it cannot make JavaScript faster

function App() {
  return (
    <div className="App">
      <Counter />
      <Todos />
    </div>
  );
}

export default App;
