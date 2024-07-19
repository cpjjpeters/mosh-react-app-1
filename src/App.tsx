import { useState } from "react";
import { produce } from "immer";
import "./App.css";

function App() {
  const handleClick = () => {};

  return (
    <>
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </>
  );
}

export default App;
