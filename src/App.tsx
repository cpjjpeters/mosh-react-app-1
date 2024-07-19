import { useState } from "react";

import "./App.css";

function App() {
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "New York",
      zipCode: 10001,
    },
  });

  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 94112 },
    });
  };

  return (
    <>
      <div>
        <button onClick={handleClick}>Click Me</button>
        <p>
          {customer.name} lives in {customer.address.city} with zip code{" "}
          {customer.address.zipCode}
        </p>
      </div>
    </>
  );
}

export default App;
