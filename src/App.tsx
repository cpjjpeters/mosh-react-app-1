import { useState } from "react";

function App() {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  // const handleClick = () => {};
  const handleClick = () => {
    setPizza({
      ...pizza,
      toppings: {
        ...pizza.toppings,
        1: "Pepperoni",
        2: "Onion",
        3: "Cheese",
      },
      // or toppings: [...pizza.toppings, 'Cheese']
    });
  };

  return (
    <>
      <button onClick={handleClick}>Change Name</button>
      <div>
        {pizza.name} with {pizza.toppings[0]}
      </div>
    </>
  );
}

export default App;
