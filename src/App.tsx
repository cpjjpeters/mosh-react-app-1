import { useState } from "react";

import "./App.css";

function App() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    // const newDrink = { ...drink, price: drink.price + 1 };
    // setDrink(newDrink);
    // or
    setDrink({ ...drink, price: 7 });
  };

  return (
    <>
      <div>
        <button onClick={handleClick}>Click Me</button>
        <p>{drink.price}</p>
      </div>
    </>
  );
}

export default App;
