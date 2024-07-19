import { useState } from "react";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  // const handleClick = () => {};
  const handleClick = () => {
    setGame({
      ...game,
      player: {
        // ...game.player.name,
        name: "Paul",
      }, // spread the player object
    });
  };

  return (
    <>
      <button onClick={handleClick}>Change Name</button>
      <div>{game.player.name}</div>
    </>
  );
}

export default App;
