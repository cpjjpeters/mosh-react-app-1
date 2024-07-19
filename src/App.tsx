import { useState } from "react";

function App() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 100 },
      { id: 2, title: "Product 2", quantity: 150 },
      { id: 3, title: "Product 3", quantity: 200 },
    ],
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 2 ? { ...item, quantity: 120 } : item
      ),
    });
  };
  return (
    <>
      {/* <h3>Cart {cart.items.map(item) =>item.id ===2}</h3> */}
      <button onClick={handleClick}>Change quantity</button>
      {/* <p>{cart.items.filter((id = 2))}</p> */}
    </>
  );
}

export default App;
