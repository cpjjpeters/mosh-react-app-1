import { useState } from "react";
// import Message from "./Message";
import ListGroup from "./components/ListGroup";
// import Form from "./components/Form";

import "./App.css";

function App() {
  const items = ["New York", "Los Angeles", "Chicago", "London", "Tokyo"];

  return (
    <>
      <div>
        {/* <Message /> */}
        {/* <Form /> */}
        <ListGroup items={items} heading="Cities" />
      </div>
    </>
  );
}

export default App;
