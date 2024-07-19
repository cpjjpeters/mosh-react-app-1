import { useState } from "react";

import "./App.css";

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, description: "Bug 1", fixed: false },
    { id: 2, description: "Bug 2", fixed: false },
    { id: 3, description: "Bug 3", fixed: false },
  ]);

  const handleClick = () => {
    setBugs(bugs.map((bug) => (bug.id === 2 ? { ...bug, fixed: true } : bug)));
  };

  return (
    <>
      <div>
        <button onClick={handleClick}>Click Me</button>
        {bugs.map(
          (bug) => (
            console.log(bug),
            (
              <div key={bug.id}>
                {bug.description} - {bug.fixed}
              </div>
            )
          )
        )}
      </div>
    </>
  );
}

export default App;
