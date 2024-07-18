import { useState } from "react";
// import Message from "./Message";
import ListGroup from "./components/ListGroup";
// import Form from "./components/Form";

import "./App.css";

function App() {
  const items = ["New York", "Los Angeles", "Chicago", "London", "Tokyo"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <div>
        {/* <Message /> */}
        {/* <Form /> */}
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
      </div>
    </>
  );
}

export default App;
