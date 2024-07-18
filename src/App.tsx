import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const name = "Carl";
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div>
        {firstName} {lastName ? `(${lastName})` : ""}
      </div>
    </>
  );
}

export default App;
