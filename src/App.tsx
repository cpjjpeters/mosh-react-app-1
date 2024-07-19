import { useState } from "react";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  // const handleClick = () => {};

  return (
    <>
      <div>{game.player.name}</div>
    </>
  );
}

export default App;
