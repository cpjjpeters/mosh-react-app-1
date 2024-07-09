import { useState } from "react";
import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Form from "./components/Form";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const name = "Carl";

  return (
    <>
      <div>
        {/* <Message /> */}
        <Form />
        {/* <ListGroup /> */}
      </div>
      {/* <h1>Vite + React</h1> */}
    </>
  );
}

export default App;
